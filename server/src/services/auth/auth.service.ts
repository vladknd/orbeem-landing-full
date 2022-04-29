import { recoverPersonalSignature } from "eth-sig-util";
import { bufferToHex } from "ethereumjs-util";
import { prismaClient } from "../../db"
import jwt from "jsonwebtoken"


export interface AuthData {
    publicAddress: string;
    signature: string;
}
export const verify = async (authData: AuthData) => {
    console.log("REQUESTED");

    console.log("AUTH",authData)
    const { publicAddress, signature } = authData;
    if (!signature || !publicAddress) throw new Error("INVALID AUTHENTICATION DATA")
    
    const user = await prismaClient.user.findUnique({
        where: {
            publicAddress
        }
    })
    if(!user) return null
    console.log("USER HAS BEEN FOUND")
    
    const msg = `I am signing my one-time nonce: ${user.nonce}`
    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'))
    const address = recoverPersonalSignature({
        data: msg,
        sig: signature
    })
    console.log("ADDRESS", address)
    

    const validAddress = address.toLowerCase() === publicAddress.toLowerCase()
    if (!validAddress) throw new Error("ADDRESS VERIFICATION FAILED")
    console.log("USER HAS BEEN VERIFIED")
    
	await prismaClient.user.update({
        where: {
          publicAddress
        },
        data: {
          nonce: Math.floor(Math.random() * 10000),
        },
    })
    
    const token = await generateToken({id: user.id, publicAddress})
    const verified = {token, user}
    console.log("VERIFIED",verified)
    return verified
}


interface jwtPayload {
    id: number;
    publicAddress: String;
}
const generateToken = ({id, publicAddress}: jwtPayload) => {
    return jwt.sign(
        {
            id,
            publicAddress
        },
        "hihi",
        {
            algorithm: "HS256",
        }
    )
}