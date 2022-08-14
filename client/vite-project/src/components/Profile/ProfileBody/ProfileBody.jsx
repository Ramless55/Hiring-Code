import React from 'react'
import './ProfileBody.css'
import PostCard from '../../PostCard/PostCard'
import profile from '../../../assets/img/profile.png'

const ProfileBody = () => {
    return (
        <div>
            <div className='container__profile'>

                <div className='container__top'>

                    <div className='top__row'>

                        <div className='top__left'>

                            <div className="left__profile">

                                <img src={profile} />

                            </div>

                        </div>

                        <div className='top__right'>

                            <div className='right__infoUser'>

                                <p>Nombre(s): Ezequiel</p>
                                <p>Apellido(s): Morales</p>
                                <p>Usuario: elsmrls</p>
                                <p>Correo eletrónico: ezemoralesmdp@gmail.com</p>
                                <p>Número telefónico: +54 223 343 5325</p>
                                <p>Fecha de nacimiento: 14/10/1994</p>
                                <p>País: Argentina</p>
                                <p>Dirección: San Lorenzo 3237 PB 2</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='container__bottom'>

                    <div className='bottom__row'>
                        <p>Mis publicaciones</p>
                        <PostCard />
                        <PostCard />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileBody