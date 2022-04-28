import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const CommunityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding-left: 50px;

    width: 100%;
    height: 630px;
    background-image: url("comm.svg");
    background-position: 50% 0%;
    background-size: 1500px;

    @media (max-width: 600px) {
        align-items: center;

        height: 500px;
        background-size: 900px;
        background-position: center;
        background-image: url("circ.svg");
    }
`

export const ContentContainer = styled.div`
    
    @media (max-width: 600px) {
        margin-top: 900px;
    }
`
