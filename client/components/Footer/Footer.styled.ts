import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding: 0px 80px; */

    width: 100%;
    height: 100px;
    background-color: #1E1E2A;

    
`

export const FooterText = styled.h3`
    color: white;
    font-size: 15px;
    font-weight: 100;

    @media(max-width: 600px){
        margin-right: 12px;
    }
`