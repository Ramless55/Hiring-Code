import React, { useEffect, useState } from 'react'
import HomeBody from '../../components/Home/HomeBody/HomeBody'
import Welcome from '../../components/Home/Welcome/Welcome'
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
        <div className="homePage">
            <Welcome logged={logged} user={user}/>
            <HomeBody logged={logged} user={user}/>
        </div>
    )
}

export default HomePage