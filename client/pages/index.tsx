import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

import CommunityComponent from '../components/Community/Community.component'
import HeaderComponent from '../components/Header/Header.component'
import WelcomeComponent from '../components/Welcome/Welcome.component'
import InfoComponent from '../components/Info/Info.component'
import RoadmapComponent from '../components/Roadmap/Roadmap.component'
import FooterComponent from '../components/Footer/Footer.component'

import { 
  IndexContainer 
} from '../styles/pages/Index.styled'
import RegistrationComponent from '../components/Registration/Registration.component'
import EcosystemComponent from '../components/Ecosystem/Ecosystem.component'

const LS_KEY = 'login-with-metamask:auth';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

interface AuthState {
  accessToken?: string;
}
const Home: NextPage = () => {
  //ADAPTIVE:
  const isMobile = useMediaQuery({ query: '(min-width: 1000px)' })
  useEffect(() => {
  }, [isMobile])
  
  //AUTHORIZATION:
  const [ authState, setAuthState ] = useState<AuthState>({})
  const [registered, setRegistered] = useState<boolean>(true)
  useEffect(() => {
    const ls = window.localStorage.getItem(LS_KEY)
    const token = ls && JSON.parse(ls)
    setAuthState({accessToken: token})
  }, [])

  const handleLogin = (accessToken: string) => {
    localStorage.setItem(LS_KEY, accessToken)
    setAuthState({ accessToken })
  }

  const handleLogout = () => {
    localStorage.removeItem(LS_KEY)
    setAuthState({ accessToken: undefined })
  }

  // console.log(window);
  
  return (
    // <ApolloProvider client={client}>
    <IndexContainer>
      {registered ? null : <RegistrationComponent/>}
      <HeaderComponent/>
      <WelcomeComponent isMobile={isMobile} setModal={setRegistered}/>
      <CommunityComponent isMobile={isMobile}/>
      <InfoComponent/>
      <RoadmapComponent/>
      <EcosystemComponent/>
      <FooterComponent/>
    </IndexContainer>
    // </ApolloProvider>
  )
}

export default Home
