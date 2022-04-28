import { gql } from "@apollo/client"

export const VERIFY_USER = gql`
    mutation VerifyUser($publicAddress: String!, $signature: String!) {
        verifyUser(publicAddress: $publicAddress, signature: $signature) {
            token,
            user {
                publicAddress
                firstName
                surname
                email
                username
            }
        }
    }
`

export const REGISTER_USER = gql`
    mutation Mutation($publicAddress: String!, $username: String!, $email: String!, $firstName: String!, $surname: String!) {
        register(publicAddress: $publicAddress, username: $username, email: $email, firstName: $firstName, surname: $surname) {
            id
        }
    }
`