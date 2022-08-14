import React from 'react'
import './NewPost.css'
import profile from '../../../assets/img/profile.png'
import Rating from '../Rating/Rating'
import NewPost from '../../Button/NewPost/NewPost'

const PostCard = () => {
    return (
        <div className='newPost__content'>

            <div className="newPost__top">

                <form className='newPost__form'>

                    <label for="titlePost">Título</label>
                    <input className="form__input" type="text" id="titlePost" placeholder="Ingresar titulo" required></input>

                    <label for="personalDescription">Contanos de vos... (máx. 500 caracteres)</label>
                    <textarea className="form__input-description" id="personalDescription"  placeholder="Escribe algo..." maxlength="500" required></textarea>

                </form>

            </div>

            <div className="newPost__bottom">

                    <NewPost />

            </div>
            

        </div>
    )
}

export default PostCard