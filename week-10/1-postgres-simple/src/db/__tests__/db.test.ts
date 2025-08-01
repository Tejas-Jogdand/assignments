import { client } from '../..';
import { createUser, getUser } from '../user';
import { createTables, dropTables } from '../setup';
import { createTodo, updateTodo, getTodos } from '../todo';

beforeAll(async () => {
    await client.connect();
    await dropTables();
    await createTables();
});

afterAll(async () => {
    await client.end();
});

describe('User Database Operations', () => {
    test('createUser inserts a new user and returns the user object', async () => {
        const username = 'testuser';
        const password = 'testpass';
        const name = 'Test User';

        const createdUser = await createUser(username, password, name);
        expect(createdUser).toHaveProperty('id');
        expect(createdUser.username).toBe(username);
        expect(createdUser.name).toBe(name);
        expect(createdUser.password).toBe(password);
    });

    test('getUser retrieves a user by ID', async () => {
        // First create a user to fetch
        const newUser = await createUser('getusertest', 'password', 'GetUser');
        const userId = newUser.id;

        const user = await getUser(userId);
        expect(user).toHaveProperty('id', userId);
        expect(user.username).toBe('getusertest');
        expect(user.name).toBe('GetUser');
    });
});


describe('Todo Operations', () => {
    let userId: number;
  
    beforeAll(async () => {
      // Create a user for the todo tests
      const user = await createUser('todotestuser', 'todopass', 'Todo User');
      userId = user.id;
    });
  
    test('createTodo inserts a new todo for a user', async () => {
      const title = 'Test Todo';
      const description = 'Test Description';
      const todo = await createTodo(userId, title, description);
  
      expect(todo).toHaveProperty('id');
      expect(todo.title).toEqual(title);
      expect(todo.description).toEqual(description);
      expect(todo.done).toEqual(false);
      expect(todo.user_id).toEqual(userId);
    });
  
    test('updateTodo marks a todo as done', async () => {
      const { id: todoId } = await createTodo(userId, 'Update Test', 'To be updated');
      const updatedTodo = await updateTodo(todoId);
      expect(updatedTodo.done).toEqual(true);
    });
  
    test('getTodos retrieves all todos for a user', async () => {
      await createTodo(userId, 'Get Test 1', 'Desc 1');
      await createTodo(userId, 'Get Test 2', 'Desc 2');
      const todos = await getTodos(userId);
  
      expect(todos.length).toBeGreaterThanOrEqual(2);
      todos.forEach(todo => {
        expect(todo).toHaveProperty('id');
        expect(todo.user_id).toEqual(userId);
      });
    });
  });
  