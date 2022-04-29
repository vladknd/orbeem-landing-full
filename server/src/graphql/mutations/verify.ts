import { gql } from "apollo-server-express"
import { verify, AuthData } from "../../services/auth/auth.service"
import { findUser } from "../../services/user/user.service"


export const typedefVerifyMutation = gql`
    type Verified {
        token: String!
        user: User
    }
    extend type Mutation {
        verifyUser(
            publicAddress: String!
            signature: String!
        ): Verified
    }
`

export const resolveVerifyMutation = {
    verifyUser: async (
        _: undefined,
        {
            publicAddress,
            signature
        }: AuthData,
    ) => {
        const verified = await verify({publicAddress, signature})
        console.log("VERIFIED", verified);
        
        return verified
    }
}