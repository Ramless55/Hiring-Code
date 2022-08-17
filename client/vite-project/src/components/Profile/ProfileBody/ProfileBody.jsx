import React, { useState, useEffect } from 'react'
import './ProfileBody.css'
import PostCard from '../../PostCard/PostCard'
import EditProfile from '../../Button/EditProfile/EditProfile'

const ProfileBody = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('User'))
    )

    return (
        <div>
            <div className='container__profile'>

                <div className='container__top'>

                    <div className='top__row'>

                        <div className='top__left'>

                            <div className="left__profile">

                                <img src={user.image} />

                            </div>



                        </div>

                        <div className='top__right'>

                            <div className='right__infoUser'>

                                <p>Nombre: {(user.name)}</p>
                                <p>Apellido: {(user.lastName)}</p>
                                <p>Usuario: {(user.userName)}</p>
                                <p>Telefono: {(user.phone)}</p>
                                <p>Pais: {(user.country)}</p>
                                <p>Fecha de Nacimiento: {(user.date)}</p>
                                <p>Direccion: {(user.address)}</p>
                                <p>Correo: {(user.email)}</p>

                            </div>


                            <div>
                                <EditProfile />
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