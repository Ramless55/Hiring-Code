import React from 'react'
import PostCard from '../../PostCard/PostCard'
import Pagination from '../../../components/Home/Pagination/Pagination'
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