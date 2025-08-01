import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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
    const response = await prisma.user.create({
        data:{
            username:username,
            password:password,
            name:name
        }
    })
    return response
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
    const response = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
    return response
}
