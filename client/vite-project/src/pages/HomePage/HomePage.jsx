import React from 'react'
import Header from '../../components/Header/NavBarHome/NavbarHome'
import HomeBody from '../../components/HomeBody/HomeBody'
import Welcome from '../../components/Welcome/Welcome'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <Header />
            <Welcome />
            <HomeBody />
        </div>
    )
}

export default HomePage