import styled from 'styled-components'
import { colors } from '../../styles/colors'

//-----------------------ROADMAP-CONTAINER-------------------------
export const RoadmapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 0px;
    
    width: 100%;
    height: 100%;
    background-color: rgba(14, 14, 14, 0.6);
    backdrop-filter: blur(41px);
`


//-----------------------ROADMAP-PHASE-------------------------
//PHASE-CONTAINER:
export const PhaseContainer = styled.div`
    width: 100%;
    margin: 50px 0px;
`

//PHASE-CONTENT:
export enum EDirection {
    left,
    right
}
export interface IPhaseContent {
    direction: EDirection
}
export const PhaseContent = styled.div`
    display: flex;
    flex-direction: ${(props: IPhaseContent) => { 
        if(props.direction === EDirection.left) return "row"
        else if(props.direction === EDirection.right) return "row-reverse"
    }};
    flex-wrap: wrap;
    justify-content: center;
`

export const PhaseInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 800px;

    margin: 50px;
`

export const PhaseImage = styled.div`
    width: 300px;
    height: 300px;
    margin: 25px;
`

export const PhaseHeader = styled.h2`
    font-family: 'Play';
    font-size: 40px;
    margin: 5px 0px;
    color: white;
    opacity: 0.8;
`

export const PhaseText = styled.div`
    font-family: 'DecoType';
    font-size: 25px;
    color: white;
    opacity: 0.5;   
`