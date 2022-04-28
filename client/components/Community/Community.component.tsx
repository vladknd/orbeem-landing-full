//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------COMPONENTS:
// import MediaIcon from './MediaIcon'
import {MediaComponent} from './Media.component'
//-------------------STYLED-COMPONENTS:
import {
    CommunityContainer,
} from './Community.styled'

import {
    Divider,
} from '../../styles/Components.styled'


//#------------------BODY-------------------#
interface CommunityProps {
    isMobile: boolean;
}
const CommunityComponent: React.FC<CommunityProps> = ({isMobile}) => {
    return (
        <>
        <Divider/>
        <CommunityContainer id="community-section">
            <MediaComponent/>
        </CommunityContainer>
        <Divider/>  
        </>
    )
}

export default CommunityComponent