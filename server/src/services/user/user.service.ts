import { prismaClient } from "../../db";


export interface NewUser {
    publicAddress: string;
    username: string;
    email: string;
    firstName: string;
    surname: string;
}
export const createUser = async (newUser: NewUser) => {
    await prismaClient.user.create({
        data: {
            nonce: Math.floor(Math.random() * 10000),
            ...newUser
        }
    })
}

export const findUser = async (publicAddress: string) => {
    const user = await prismaClient.user.findUnique({
        where: {
            publicAddress
        }
    })
    return user
}