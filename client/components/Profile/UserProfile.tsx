import Image from "next/image"
import { Button, GlowText } from "../../styles/Components.styled";
import {  
    CalculatorContainer, 
    InputContainer, 
    Input,
    UserContianer,
    InfoContainer,
    FieldLabel,
    PriceContainer,
    Coin,
    PriceText
} from "./Profile.styled"
import {BoxHeader} from '../../styles/Components.styled'
import { buyToken } from '../../web3/web3Utils'
import { useContext, useState } from "react";
import { useQuery } from '@apollo/client'
import { UserContext, useUser} from '../../auth/userContext'

//-------------------CALCULATOR-COMPONENT----------------------------------
interface IInputField {
    placeholder: string;
    image?: string;
    change?: (e: any) => void;
    value?: number;
}
const InputField = (props: IInputField) => {
    return (
        <InputContainer>
            <Input type="text" placeholder={props.placeholder} value={props.value}
                onChange={(e) => {
                    if(props.change) props.change(e)
                }}
                
            /> 
            <Image src={props.image} width={30} height={30}/>
        </InputContainer> 
    )
}
const PriceComponent = () => {
    return (
        <PriceContainer>
            <Coin>
                <Image src="/ORB.svg" width={130} height={130}/>
                <PriceText> 1 ORBM</PriceText>
            </Coin>
            <GlowText size="35px">FOR</GlowText>
            <Coin>
                <Image src="/DAI.svg" width={130} height={130}/>
                <PriceText> 0.1 DAI</PriceText>
            </Coin>
        </PriceContainer>
    )
}
const Calculator: React.FC = () => {
    //--------AMOUNT OF DAI ENTERED:
    const [amountDAI, setAmount] = useState<number>(0)
    console.log(amountDAI)

    return (
        <CalculatorContainer>
            <BoxHeader>
                PURCHASE TOKENS
            </BoxHeader>
            <InputField placeholder="DAI" image="/DAI.svg"
                change={(e)=> {
                    setAmount(e.target.value)
                }}
            />
            <InputField placeholder="ORB" image="/ORB.svg" value={amountDAI/0.1}/>
            <Button width="200px" height="60px"
                onClick={() => {
                    buyToken(amountDAI)
                }}
            >BUY
            </Button>
            <PriceComponent></PriceComponent>
        </CalculatorContainer>
    )   
}


//-------------------INFO-COMPONENT----------------------------------
interface IInfoField {
    placeholder: string;
    label: string;
}
const InfoField = (props: IInfoField) => {
    return (
        <InputContainer>
            <FieldLabel>{props.label}</FieldLabel>
            <Input type="text" placeholder={props.placeholder} disabled/> 
        </InputContainer> 
    )
}
const ProfileInfo = () => {
    const {user} = useUser()
    if(user) {

    }
    console.log("CTX", user);

    return (
        <InfoContainer>
            <BoxHeader>
                PROFILE INFO
            </BoxHeader>
            <InfoField placeholder={user?.username ? user.username : ""} label="USERNAME:"/>
            <InfoField placeholder="voznitsa98@gmail.com" label="EMAIL:"/>
            <InfoField placeholder="vlad" label="FIRST NAME:"/>
            <InfoField placeholder="voznitsa" label="LAST NAME:"/>
        </InfoContainer>
    )
}



//-----------------USER-PROFILE COMPONENT--------------------------------
const UserProfile: React.FC = () => {
    
    return(
        <UserContianer>
            <Calculator/>
            <ProfileInfo/>
        </UserContianer>
    )
}

export default UserProfile