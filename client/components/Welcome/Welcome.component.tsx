//#------------------GLOBAL-IMPORTS------------------#
import { useEffect, useState, SetStateAction, useContext } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Router from 'next/router'
import { setCookies } from 'cookies-next'
//#------------------LOCAL-IMPORTS-------------------#
import { buyToken, checkBalance, withdraw, getAccount, signMessage } from '../../web3/web3Utils'
import data from './Welcome.data'
//-------------------STYLED-COMPONENTS:
import { 
    Button,
    GlowText,
} from '../../styles/Components.styled'

import {
    WelcomeContainer,
    WelcomeContent,
    WelcomeHeader,
    WelcomeText,
    WelcomeImage
} from './Welcome.styled'
import { QUERY_USER } from '../../graphql/queries/user.queries'
import { VERIFY_USER } from '../../graphql/mutations/user.mutations'
import { useLazyQuery, useMutation } from '@apollo/client'
import { UserContext, useUser } from '../../auth/userContext'


declare let window: any
//#------------------BODY-------------------#
interface MainProps {
    setModal: React.Dispatch<SetStateAction<boolean>>;
    isMobile: boolean;
}
const WelcomeComponent: React.FC<MainProps> = ({
    setModal,
    isMobile
}) => {
    const [signUp, setSignUp] = useState<boolean>(false)
    const [checkUser] = useLazyQuery(QUERY_USER)
    const [verifyUser] = useMutation(VERIFY_USER)
    // const userContext = useContext(UserContext);
    const {user, setLoggedIn, setLoggedOut} = useUser()
    return (
        <WelcomeContainer id="home-section">
            <WelcomeContent>
                <GlowText>
                 {data.header}
                </GlowText>
            
                <WelcomeText>
                 {data.text}
                </WelcomeText> 

                <Button
                    mt="30px"
                    align="center"
                    onClick={async () => {
                        const addr = await getAccount()
                        console.log("DONE", addr);
                        
                        const {data} = await checkUser({variables: {publicAddress: addr}})
                        console.log("DATA",data)
                        if(!data.findUser){
                            console.log("USER NOT FOUND")
                            
                            setModal(false)
                        } else {
                            const { nonce, publicAddress } = data.findUser
                            const sigMsg = await signMessage(nonce, publicAddress)
                            console.log("SIG",sigMsg)
                            const verified = await verifyUser({variables: sigMsg})
                            const userData =  await verified.data.verifyUser
                            console.log("USER BEF", user);
                            await setLoggedIn(userData.user)
                            console.log("USER AFT", user);
                            

                            
                            
                            // setCookies("jwt", token.data.verifyUser.token)
                            if(user) Router.push('/profile')
                        }
                    }}
                >
                    CONNECT
                </Button>
            </WelcomeContent>
            <WelcomeImage>
                <Image src="/welcome.webp" width={isMobile ? 600 : 600} height={isMobile ? 600 : 600}/>
            </WelcomeImage>
        </WelcomeContainer>
    )
}

export default WelcomeComponent;