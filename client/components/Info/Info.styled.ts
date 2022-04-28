import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
    /* padding: 20px 0px; */
    background-color: ${colors.darkBg};

    @media(max-width: 600px){
        margin-top: 500px;
    }
    margin-top: 200px;

`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 700px;
`

export const InfoImage =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 700px;
`

export const InfoHeader = styled.h2`
    color: white;
    font-size: 55px;
    font-weight: 400;

    margin: 0px;
`

export const InfoText = styled.p`
    color: white;
    opacity: 0.6;
    font-size: 25px;
    font-weight: 200;

    margin: 20px 0px 0px 0px;
`