import React from 'react'
import PostCard from '../../PostCard/PostCard'
import Pagination from '../../../components/Home/Pagination/Pagination'
import Filter from '../Filter/Filter'
import image from '../../../assets/svg/filter.svg'
import './HomeBody.css'

const HomeBody = () => {
    return (
        <div>
            <div className="homeBody">
                <div className="homeBody__left">
                    <img src={image}></img>
                    <Filter />
                    <Filter />
                    <Filter />
                    <Filter />
                </div>
                <div className="homeBody__right">
                    <div className="right__postCards">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                        <Pagination />
                </div>
            </div>
        </div>
    )
}

export default HomeBody