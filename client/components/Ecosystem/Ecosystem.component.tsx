import Image from 'next/image'
import React from 'react'
import { GlowText } from '../../styles/Components.styled'
import { 
    EcosystemContainer 
} from './Ecosystem.styled'

const EcosystemComponent = () => {
  return (
    <EcosystemContainer id="ecosystem-section">
        <GlowText>ORBEEM ECOSYSTEM</GlowText>
        <Image src='/Ecosystem.svg' width={1600} height={600}></Image>
    </EcosystemContainer>
  )
}

export default EcosystemComponent