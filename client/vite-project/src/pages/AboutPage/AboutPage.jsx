import React, { useEffect, useState } from 'react'
import AboutCard from '../../components/AboutCard/AboutCard'
import axios from 'axios'
import './AboutPage.css'

const AboutPage = () => {

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
                </div>
            </div>
        </div>
    )
}

export default AboutPage