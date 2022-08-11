import React from 'react'
import Header from '../../components/Header/NavBarHome/NavbarHome'
import HomeBody from '../../components/Home/HomeBody/HomeBody'
import Welcome from '../../components/Home/Welcome/Welcome'
// import Footer from '../../components/Footer/Footer'
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