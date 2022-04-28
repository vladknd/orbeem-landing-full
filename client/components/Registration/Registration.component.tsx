//#------------------GLOBAL-IMPORTS------------------#
import React, 
{ 
  SetStateAction,
  useEffect, 
  useState 
} from 'react'

import { useMutation } from '@apollo/client'
//#------------------LOCAL-IMPORTS-------------------#
import { Button } from '../../styles/Components.styled'
import { getAccount } from '../../web3/web3Utils'
import { 
    RegistrationBackground,
    RegistrationModal,
    RegistrationForm,
    ModalHeader,
    Input,
    ModalLabel,
    InputContainer
} from './Registration.styled'

import { REGISTER_USER } from '../../graphql/mutations/user.mutations'

//INTERFACES:
interface RegData {
  publicAddress?: string;
  username?: string;
  email?: string;
  firstName?: string;
  surname?: string;
}

interface InputProps {
  label: string;
  name: string;

  setter: React.Dispatch<SetStateAction<RegData | null>>;
}

//INPUT-COMPONENT:
const InputField = ({label, name, setter}: InputProps) => {
  return (
    <InputContainer>
      <Input type="text" id={name} placeholder={label}
        onChange={(e) => {
          setter((prevState: RegData | null) => { return {...prevState, [name]: e.target.value}})
        }}
      />
    </InputContainer>
  )
}

//REGISTRATION-COMPONENT:
const RegistrationComponent = () => {
  const [regData, SetRegData] = useState<RegData | null>(null)
  
  useEffect(() => {
    setAddress()
  }, [])

  useEffect(() => {
    console.log(regData);
    
  })

  const setAddress = async () => {
    const addr = await getAccount()
    SetRegData({publicAddress: addr})
  }

  const [signUp] = useMutation(REGISTER_USER)
  return (
    <RegistrationBackground>
        <RegistrationModal>
            <ModalHeader >
              REGISTRATION
            </ModalHeader>

            <RegistrationForm onSubmit={() => {
              signUp({variables: {
                  publicAddress: regData?.publicAddress,
                  username: regData?.username,
                  email: regData?.email,
                  firstName: regData?.firstName,
                  surname: regData?.surname
              }})
            }}>
              <InputField label="Username" name="username" setter={SetRegData}/>
              <InputField label="Email" name="email" setter={SetRegData}/>
              <InputField label="First Name" name="firstName" setter={SetRegData}/>
              <InputField label="Surname" name="surname" setter={SetRegData}/>
              
              
              <Button width="250px" height="70px" mt="20px" type="submit">
                SIGN UP
              </Button>
            </RegistrationForm>
            

        </RegistrationModal>
    </RegistrationBackground>
  )
}

export default RegistrationComponent