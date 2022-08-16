import React, { useEffect } from 'react'
import HomeBody from '../../components/Home/HomeBody/HomeBody'
import Welcome from '../../components/Home/Welcome/Welcome'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import './HomePage.css'


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <AnimatedPage>
            <div className="homePage">
                <Welcome />
                <HomeBody />
            </div>
        </AnimatedPage>
    )
}

export default HomePage