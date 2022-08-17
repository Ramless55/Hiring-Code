import React from 'react'
import './PostCard.css'
import profile from '../../assets/img/profile.png'
import Rating from './Rating/Rating'

const PostCard = (props) => {
    return (
        <div className='post__content'>

            <div className="post__top">

                <div className="post__left">

                    <img src={props.image}/>
                    <p className='user'>{props.user}</p>

                </div>

                <div className="post__right">

                    <div className="infoUser__container">
                        <div className="container__top">
                            <Rating />
                        </div>

                        <div className="container__bottom">
                            <img className='phone-image' src={props.image}/>
                            <p className="infoUser__name">{props.name} {props.lastName}</p>
                            <p className="infoUser__location">{props.country}</p>
                        </div>
                    </div>

                    <div className='post__description'>
                        <p className='description'>{props.description}</p>
                    </div>
                </div>
            </div>

            <div className="post__bottom">
                <div className='skill_container'>
                    <div className='skill_container-post'>.NET</div>
                    <div className='skill_container-post'>C#</div>
                    <div className='skill_container-post'>JavaScript</div>
                    <div className='skill_container-post'>React</div>
                    <div className='skill_container-post'>Node.js</div>
                    <div className='skill_container-post'>MUI</div>
                    <div className='skill_container-post'>MongoDB</div>
                    <div className='skill_container-post'>SCRUM</div>
                    <div className='skill_container-post'>Bootstrap</div>
                    <div className='skill_container-post'>Git</div>
                </div>
            </div>
        </div>
    )
}

export default PostCard