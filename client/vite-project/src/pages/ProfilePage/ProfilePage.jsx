import React, { useEffect } from 'react'
import ProfileBody from '../../components/Profile/ProfileBody/ProfileBody'

import './ProfilePage.css'

const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <ProfileBody />
        </div>
    )
}

export default ProfilePage