import React from 'react'
import './PostCard.css'
import profile from '../../assets/img/profile.png'

const PostCard = () => {
    return (
        <div className='post__content'>
            <div className="post__infoUser">
                <img src={profile} className='post__profile'/>
                <div className="infoUser__data">
                    <p className="infoUser__name">Ezequiel Morales</p>
                    <p className="infoUser__profession">Programador</p>
                    <p className="infoUser__location">Mar del Plata, Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className='post__description'>
                <p>Ea elit ea nulla incididunt culpa sint veniam officia culpa ut. Aliquip nostrud consectetur eu proident nulla enim consectetur tempor officia ullamco mollit culpa. Nisi laboris ut non nulla voluptate tempor esse magna excepteur ipsum id anim incididunt. Et nostrud adipisicing veniam labore id et culpa in qui. Dolore enim fugiat Lorem sunt non.</p>
            </div>
            <div className='skill_container'>
                <div className='skill_container-post'>.NET</div>
                <div className='skill_container-post'>C#</div>
                <div className='skill_container-post'>JavaScript</div>
                <div className='skill_container-post'>React</div>
                <div className='skill_container-post'>Node.js</div>
                <div className='skill_container-post'>Materiaul UI</div>
                <div className='skill_container-post'>MongoDB</div>
            </div>
        </div>
    )
}

export default PostCard