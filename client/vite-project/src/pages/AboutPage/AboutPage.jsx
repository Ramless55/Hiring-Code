import React, { useEffect, useState } from 'react'
import AboutCard from '../../components/AboutCard/AboutCard'
import imgDani from '../../assets/img/about-us__card-dani.png'
import axios from 'axios'
import './AboutPage.css'


const AboutPage = () => {
    const [user1, setUser1] = useState({})
    const [user2, setUser2] = useState({})
    const [user3, setUser3] = useState({})
    const [user4, setUser4] = useState({})

    const users = ['daniluna032', 'Ramless55', 'TobiasGonzalezz', 'ezemoralesmdp']


    const githubUser = () => {
        axios.get(`https://api.github.com/users/${users[0]}`)
            .then(res => setUser1(res.data))

        axios.get(`https://api.github.com/users/${users[1]}`)
            .then(res => setUser2(res.data))

        axios.get(`https://api.github.com/users/${users[2]}`)
            .then(res => setUser3(res.data))

        axios.get(`https://api.github.com/users/${users[3]}`)
            .then(res => setUser4(res.data))
    }

    useEffect(() => {
        githubUser()
    }, [])


    return (
        <div className='aboutPage__container'>
            <div className='aboutPage__title'>
                <div>
                    <h1>Acerca de Nosotros</h1>
                </div>
            </div>
            <div className='aboutPage__container-cards'>
                <div className='aboutPage__container-cards-grid'>
                    {users.map(user => {
                        return (
                            <div className='aboutPage__container-cards-box' key={user}>
                                <AboutCard
                                    user={user}
                                />
                            </div>
                        )
                    })}
                    {/* <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={user1.avatar_url}
                        title={user1.name} 
                        description={user1.bio}
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={user2.avatar_url}
                        title={user2.name}
                        description={user2.bio} 
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={user3.avatar_url}
                        title={user3.name}
                        description={user3.bio} 
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={user4.avatar_url}
                        title={user4.name}
                        description={user4.bio} 
                    />
                </div> */}
                </div>
            </div>

        </div>
    )
}

export default AboutPage