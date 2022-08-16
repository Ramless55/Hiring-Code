import React, { useState, useEffect } from 'react'
import './ProfileBody.css'
import PostCard from '../../PostCard/PostCard'
// import profile from '../../../assets/img/profile.png'

import { getMyProfile } from '../../../services/axiosServices'

const ProfileBody = () => {
    const [localData, setLocalData] = useState({
        localData: JSON.parse(localStorage.getItem("User")),
    })
    const userId = localData.localData.id

    const [user, setUser] = useState([])

    useEffect(() => {
        getMyProfile({ userId, setUser })
    }, []);

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
                                <p>correo: {(user.email)}</p>

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