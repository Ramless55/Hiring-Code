import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import './HomeBody.css'

const HomeBody = () => {
    return (
        <div>
            <div className="homeBody">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default HomeBody