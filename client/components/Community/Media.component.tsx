import Image from 'next/image'
import Link from 'next/link'

import {
    MediaContainer,
    IconContainer,
    IconsContainer,
    SmallText,
    BigText
} from './Media.styled'

// import {
//     Divider,
// } from '../../styles/Components.styled'

interface MediaIconProps {
    img: string;
    link: string;
}
export const MediaIcon:React.FC<MediaIconProps> = ({img,link}) => {
    return (
        <Link href={link}>
        <IconContainer>
            <Image
                src={img}
                width={50}
                height={50}
            />
        </IconContainer>
        </Link>
    );
}

export const MediaComponent: React.FC = () => {
    return(
        <MediaContainer>
            <SmallText>
             THE ENTRANCE TO A NEW REALITY IS HERE
            </SmallText>
            
            <BigText>
             JOIN OUR COMMUNITY
            </BigText>
            <IconsContainer>
                <div>
                    <MediaIcon img="/media/inst.png" link="https://www.instagram.com/orbeem_orb/"/>
                    <MediaIcon img="/media/discord.png"link="https://discord.gg/66C9NThy4Y"/>
                </div>
                <div>
                    <MediaIcon img="/media/youtube.png" link="https://www.youtube.com/channel/UCzdsuAip2pnf5munqiVbnwQ"/>
                    <MediaIcon img="/media/twitter.png" link="https://twitter.com/Orbeem_ORB"/>
                </div>
                <div>
                    <MediaIcon img="/media/telegram.png" link="https://t.me/orbeemRBM"/>
                    <MediaIcon img="/media/facebook.png" link="https://www.facebook.com/Orbeem/"/>
                </div>
            </IconsContainer>

            <BigText>
             LET S CONNECT THE <br/> FUTURE WITH THE PRESENT
            </BigText>
        </MediaContainer>
    )
}