import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query Query($publicAddress: String!) {
      findUser(publicAddress: $publicAddress) {
        publicAddress
        nonce
      }
    }
`

export const QUERY_USER_BY_PUBLIC_ADDRESS = gql`
  query findUserByAddress($publicAddress: String!) {
    findUserByAddress(publicAddress: $publicAddress) {
      publicAddress
      nonce
      email
      firstName
      surname
    }
  }
`