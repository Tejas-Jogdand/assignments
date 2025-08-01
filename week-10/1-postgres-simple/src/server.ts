import express from 'express';
import { client } from './index';
import { createUser } from './db/user';
import { createTodo, getTodos, updateTodo } from './db/todo';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

/**
 * In a real-world application, you would have robust authentication.
 * A user's ID would be extracted from a JWT token or a session cookie
 * after they log in. For simplicity, we'll pass it as a header.
 */
const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userId = parseInt(req.headers['x-user-id'] as string, 10);
    if (isNaN(userId)) {
        return res.status(401).json({ error: 'Unauthorized: Missing or invalid user ID in x-user-id header' });
    }
    // Attach userId to the request object for later use
    (req as any).userId = userId;
    next();
};

// --- User Routes ---
app.post('/signup', async (req, res) => {
    try {
        // Add input validation (e.g., with zod)
        const { username, password, name } = req.body;
        if (!username || !password || !name) {
            return res.status(400).json({ error: 'Username, password, and name are required' });
        }
        // IMPORTANT: Never store passwords in plaintext. Always hash them first.
        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(username, password, name);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        // This could be a unique constraint violation on username
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// --- Todo Routes (Protected by our simple "authentication") ---
app.get('/todos', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId;
        const todos = await getTodos(userId);
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve todos' });
    }
});

app.post('/todos', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId;
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }

        const newTodo = await createTodo(userId, title, description || '');
        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create todo' });
    }
});

app.put('/todos/:id/done', authMiddleware, async (req, res) => {
    try {
        const todoId = parseInt(req.params.id, 10);
        // In a real app, you'd also verify that the authenticated user (req.userId) owns this todo
        const updatedTodo = await updateTodo(todoId);
        res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

async function startServer() {
    await client.connect();
    console.log('Connected to the database!');
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();