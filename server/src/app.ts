//#--------------------APPLICATION---------------------------------#
//#----------------------------------------------------------------#

//#--------------------GLOBAL-IMPORTS:-----------------------------#
import express from "express"

//#--------------------LOCAL-IMPORTS:------------------------------#
import initApolloServer from "./graphql"

//#--------------------BODY----------------------------------------#
const start = async () => {
    const apolloServer = initApolloServer()
    const app = express()

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
    
    app.listen(4000, () => {
        console.log('SERVER RUNS ON PORT: ', 4000)
    })
}
start()