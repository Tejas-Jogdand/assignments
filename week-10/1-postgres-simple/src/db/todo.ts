import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const query = 'INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING [userId,title,description]';
    const values = [userId, title, description];

    let response = await client.query(query, values);
    console.log(response.rows)
    return response.rows
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const query = 'UPDATE todos SET done=true WHERE id=$1 RETURNING id';
    const values = [todoId];

    let response = await client.query(query, values);
    return response
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const query = 'SELECT * FROM todos WHERE user_id=$1';
    const values = [userId];

    let response = await client.query(query, values);
    return response.rows
}