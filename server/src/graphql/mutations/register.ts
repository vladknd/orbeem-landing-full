import { gql } from 'apollo-server-express'
import { NewUser, createUser } from '../../services/user/user.service'
// import { typedefUser } from '../types';
export const typedefRegisterMutation = gql`
    extend type Mutation {
        register (
            publicAddress: String!,
            username: String!,
            email: String!,
            firstName: String!,
            surname: String!
        ): User
    }
`

export const resolveRegisterMutation = {
    register: async (
        source: undefined,
        {
            publicAddress,
            username,
            email,
            firstName,
            surname
        }: NewUser,
    ) => {
        await createUser({
            publicAddress,
            username,
            email,
            firstName,
            surname
        })
    }
}