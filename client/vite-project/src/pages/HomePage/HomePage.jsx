import React, { useEffect, useState } from 'react'
import HomeBody from '../../components/Home/HomeBody/HomeBody'
import Welcome from '../../components/Home/Welcome/Welcome'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import './HomePage.css'

const HomePage = () => {
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        window.scrollTo(0,0)

        const token = JSON.parse(localStorage.getItem("Token"))

        if (token !== null) {
            setLogged(true)
            setUser(JSON.parse(localStorage.getItem("User")))
        }
    },[])

    return (
        <AnimatedPage>
            <div className="homePage">
                <Welcome logged={logged} user={user}/>
                <HomeBody logged={logged} user={user}/>
            </div>
        </AnimatedPage>
    )
}

export default HomePage