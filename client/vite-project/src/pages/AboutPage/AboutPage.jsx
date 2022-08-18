import React, { useEffect, useState } from 'react'
import AboutCard from '../../components/AboutCard/AboutCard'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import axios from 'axios'
import './AboutPage.css'

const AboutPage = () => {

    const users = ['daniluna032', 'Ramless55', 'TobiasGonzalezz', 'ezemoralesmdp']

    useEffect(() => {
        window.scrollTo(0, 0)})

    return (
        <AnimatedPage>
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
                                    <AboutCard user={user} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default AboutPage