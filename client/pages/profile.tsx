import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import HeaderComponent from '../components/Header/Header.component'
import { ProfileContainer } from '../styles/pages/Profile.styled'
import UserProfile from '../components/Profile/UserProfile'
import AdminProfile from '../components/Profile/AdminProfile'
import { checkAdmin } from '../web3/web3Utils'

const Profile: NextPage = () => {
  const [admin, setAdmin] = useState<boolean>(false)
  console.log();
  
  useEffect(() => {
      (async () => {
        const check = await checkAdmin()
        if(check) setAdmin(true)
        console.log("ADMIN",admin);
      })()
  }, [])
  
  
  return (
    <ProfileContainer>
      <HeaderComponent/>
      { admin
        ? <AdminProfile/>
        : <UserProfile/>
      }
    </ProfileContainer>
  )
}

export default Profile
