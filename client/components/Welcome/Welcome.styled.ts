import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap-reverse;

    width: 100%;

    margin: 150px 0px 20px 0px;
    
`

export const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 4 0px;
    width: 900px;

`

export const WelcomeImage = styled.div`
    display: flex;
    justify-content: center;

    z-index: 1;
`

export const WelcomeHeader = styled.h3`
    color: white;
    font-size: 35px;
    font-weight: 300;

    margin: 0px;
`

export const WelcomeText = styled.p`
    font-size: 25px;
    color: white;
    opacity: 0.6;
`