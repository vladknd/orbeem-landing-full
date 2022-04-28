import styled from 'styled-components'
import { Box } from '../../styles/Components.styled'

export const AdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 150px;

`

export const WithdrawContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 95%;
    height: 150px;
    padding: 0px 50px;
    margin-bottom: 50px;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 700px;
    height: 50px;
    background-color: rgba(164,164,164, 0.17);
    border-radius: 15px;

`
export const FieldRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const FieldLabel = styled.p`
    color: white;
    opacity: 0.6;
    width: 180px;

    margin: 0px 10px;
`

export const FieldAmount = styled.p`
    color: white;
    opacity: 0.6;

    margin: 0px 10px;
`