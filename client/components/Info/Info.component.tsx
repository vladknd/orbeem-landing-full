import Image from 'next/image'
import { InfoContainer, InfoContent, InfoHeader, InfoText, InfoImage } from './Info.styled'
import { Divider } from '../../styles/Components.styled'
import data from './Info.data'

const InfoComponent: React.FC = () => {
    return(
        <>
        <InfoContainer id="info-section">
        <Divider mb="20px"/>
            <InfoContent>   
                <InfoHeader>
                 {data.header}
                </InfoHeader>

                <InfoText>
                 {data.text}
                </InfoText>
            </InfoContent>

            <InfoImage>
                <Image src={data.image} width={600} height={600}/>
            </InfoImage>
    
        </InfoContainer>
        <Divider/>
        </>
    )
}

export default InfoComponent