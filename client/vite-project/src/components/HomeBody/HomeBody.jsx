import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import Pagination from '../../components/Pagination/Pagination'
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
            <Pagination />
        </div>
    )
}

export default HomeBody