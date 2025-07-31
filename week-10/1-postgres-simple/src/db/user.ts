import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query = `INSERT INTO users (username, password, name) VALUES($1,$2,$3) RETURNING [username,password,name]`
    const values = [username,password,name]
    const response = await client.query(query,values);
    console.log(response.rows)
    return response.rows
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = `SELECT username, password, name FROM users`
    const response = await client.query(query);
    console.log(response.rows)
    return response.rows
}
