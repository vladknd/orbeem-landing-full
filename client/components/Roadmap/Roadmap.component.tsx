import { 
    RoadmapContainer,
    PhaseContainer,
    PhaseContent,
    IPhaseContent,
    EDirection,
    PhaseInfo,
    PhaseHeader,
    PhaseText,
    PhaseImage
} from './Roadmap.styled'
import { Divider, GlowText } from '../../styles/Components.styled'
import React from 'react'
import Image from 'next/image'
import { phases } from './Roadmap.data';

//PHASE-COMPONENT:
interface IPhaseComponent extends IPhaseContent {
    imgSrc: string;
    header: string;
    text: string;
}
const PhaseComponent = (props: IPhaseComponent) => {
    return(
        <PhaseContainer>
        <Divider/>
            <PhaseContent direction={props.direction}>
                <PhaseImage>
                    <Image src={props.imgSrc} width={280} height={280}/>
                </PhaseImage>
                
                <PhaseInfo>
                    <PhaseHeader>{props.header}</PhaseHeader>
                    <PhaseText>{props.text}</PhaseText>
                </PhaseInfo>
            </PhaseContent>
        <Divider/>
        </PhaseContainer>
    )
}

const RoadmapComponent = () => {
    return(
        <RoadmapContainer id="roadmap-section">
            <Divider/>
                <GlowText size="60px" m="40px">ROADMAP</GlowText>
            <Divider/>
            <PhaseComponent direction={EDirection.left} imgSrc={phases[0].image} header={phases[0].header} text={phases[0].text}/>
            <PhaseComponent direction={EDirection.right} imgSrc={phases[1].image} header={phases[1].header} text={phases[1].text}/>
            <PhaseComponent direction={EDirection.left} imgSrc={phases[2].image} header={phases[2].header} text={phases[2].text}/>
            <PhaseComponent direction={EDirection.right} imgSrc={phases[3].image} header={phases[3].header} text={phases[3].text}/>
            <PhaseComponent direction={EDirection.left} imgSrc={phases[4].image} header={phases[4].header} text={phases[4].text}/>
        </RoadmapContainer>
    )
}

export default RoadmapComponent