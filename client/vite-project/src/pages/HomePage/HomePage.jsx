import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import Header from '../../components/Header/NavBarHome/NavbarHome'

const HomePage = () => {
    return (
        <div>
            <Header />
            <h1>Estamos en el home</h1>
            <PostCard />
        </div>
    )
}

export default HomePage