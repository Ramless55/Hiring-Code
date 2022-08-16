import React from 'react'
import './PostCard.css'
import profile from '../../assets/img/profile.png'
import Rating from './Rating/Rating'

const PostCard = () => {
    return (
        <div className='post__content' title="Ingresar">

            <div className="post__top">

                <div className="post__left">

                        <div className="post__profile">

                            <img src={profile} />

                        </div>

                </div>

                <div className="post__right">

                    <div className="infoUser__container">
                        <div className="container__top">
                            <Rating />
                        </div>

                        <div className="container__bottom">
                            <p className="infoUser__name">Ezequiel Morales</p>
                            <p className="infoUser__profession">(Programador)</p>
                            <p className="infoUser__location">Mar del Plata, Buenos Aires</p>
                        </div>
                    </div>

                    <div className='post__description'>
                        <p>Ea elit ea nulla incididunt culpa sint veniam officia culpa ut. Aliquip nostrud consectetur eu proident nulla enim consectetur tempor officia ullamco mollit culpa. Nisi laboris. Ea elit ea nulla incididunt culpa sint veniam officia culpa ut. Aliquip nostrud consectetur eu proident nulla enim consectetur tempor officia ullamco mollit culpa. Nisi laboris.
                        </p>
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