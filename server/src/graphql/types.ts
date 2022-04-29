import { gql } from 'apollo-server-express'

export const typedefUser = gql`
    type User {
        id: ID!
        publicAddress: String!
        nonce: Int!
        username: String!
        firstName: String!
        surname: String!
        email: String!
    }
`