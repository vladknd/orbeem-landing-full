import Image from 'next/image';
import { Divider } from '../../styles/Components.styled';
import { FooterContainer, FooterText } from './Footer.styled'

const FooterComponent = () => {
    return (
        <>
        {/* <Divider/> */}
        <FooterContainer>
            <Image
                src="/logo_vertical.svg"
                width={200}
                height={80}
            />

            <FooterText>
             @2022 All rights reserved
            </FooterText>
        </FooterContainer>
        
        </>
    );
}

export default FooterComponent