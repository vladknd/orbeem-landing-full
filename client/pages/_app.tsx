import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/fonts/fonts.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { UserProvider } from '../auth/userContext'
import { useEffect } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  // headers: {
  //   auth: localStorage.getItem('token') || "" 
  // }
});

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    
  }, [])
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  )
}

export default MyApp


