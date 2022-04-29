//#--------------------RESOLVERS---------------------------#
//#--------------------------------------------------------#

//#--------------------LOCAL-IMPORTS-----------------------#
//---------------------QUERIES:
import { resolveFindUserQuery } from "./queries/findUser"
import { resolveFindUserByAddressQuery } from "./queries/findUserByAddress"
//---------------------MUTATIONS:
import { resolveRegisterMutation } from "./mutations/register"
import { resolveVerifyMutation } from "./mutations/verify"

//#--------------------BODY--------------------------------#
const resolvers = {
    Query: {
       ...resolveFindUserQuery,
       ...resolveFindUserByAddressQuery
    },

    Mutation: {
       ...resolveRegisterMutation,
       ...resolveVerifyMutation
    }
}

export default resolvers