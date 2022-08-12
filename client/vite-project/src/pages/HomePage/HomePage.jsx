import React, { useEffect } from 'react'
import HomeBody from '../../components/Home/HomeBody/HomeBody'
import Welcome from '../../components/Home/Welcome/Welcome'
import './HomePage.css'


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="homePage">
            <Welcome />
            <HomeBody />
        </div>
    )
}

export default HomePage