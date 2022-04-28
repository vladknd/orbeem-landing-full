import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        margin-top: 1000px;
        /* padding: 0px 65px 0px 0px; */
    }

`

export const IconContainer = styled.div`
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, rgba(0,100,200,1) 0%, rgba(100,170,240,1) 35%, rgba(130,60,200,1) 86%);
    display: grid;
    place-items: center;
    clip-path: polygon(50% 0, 89% 24%, 89% 70%, 50% 95%, 10% 70%, 10% 24%);
    
    &&:hover {
        /* background: linear-gradient(70deg, rgba(0,100,200,1) 0%, rgba(100,100,240,1) 35%, rgba(130,20,200,1) 86%); */
        opacity: 0.8;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 20px 0px 20px 30px;
    
    @media (max-width: 600px) {
        /* margin-top: 500px; */
    }
`

export const SmallText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 200;

    margin: 0px;
`

export const BigText = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 200;

    margin: 0px;
`