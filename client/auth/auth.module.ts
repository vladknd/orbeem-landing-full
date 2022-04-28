import { verify } from "jsonwebtoken"
import { getCookie } from 'cookies-next'

const secret = "hihi"

export const verifyJwt = () => {
    const tokenCookie = getCookie('jwt')
    const token = tokenCookie?.toString()

    try {
        if(token !== undefined) {
            verify(token, secret)
            return true
        }
        
    } catch (error) {
        return false
    }
}