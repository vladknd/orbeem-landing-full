import Image from "next/image"
import { AdminContainer, FieldContainer, FieldLabel,FieldAmount,FieldRight, WithdrawContainer } from "./AdminProfile.styled"
import {Button} from '../../styles/Components.styled'
import { checkBalanceDAI, checkBalanceORBM, withdrawDAI, withdrawORBM } from "../../web3/web3Utils";
import { useEffect, useState } from "react";


interface IWithdrawComponent {
    title: string;
    amount: string;
    image: string;
}
const WithdrawComponent = (props: IWithdrawComponent) => {
    return (
        <WithdrawContainer>
            <FieldContainer>
                <FieldLabel>{props.title}</FieldLabel>
                <FieldRight>
                    <FieldAmount>{props.amount}</FieldAmount>
                    <Image src={props.image} width={40} height={40}/>
                </FieldRight>
            </FieldContainer>

            <Button width="300px" height="80px"
                onClick={() => {
                    withdrawORBM()
                }}
            >WITHDRAW</Button>
        </WithdrawContainer>
    )
}

const AdminProfile: React.FC = () => {
    const [DAI, setDAI] = useState("0")
    const [ORBM, setORBM] = useState("0")
    useEffect(() => {
        checkBalanceDAI().then((result) => {
            const daiBalance = result?.toString()
            if(daiBalance) setDAI(daiBalance)
        })

        checkBalanceORBM().then((result) => {
            const orbmBalance = result?.toString()
            if(orbmBalance) setORBM(orbmBalance)
        })
    }, [])
    
    return(
      <AdminContainer>
          <WithdrawComponent title="DAI AVAILABLE:" amount={DAI} image="/DAI.svg"/>
          <WithdrawComponent title="ORBM AVAILABLE:" amount={ORBM} image="/ORB.svg"/>
      </AdminContainer>
    )
}

export default AdminProfile