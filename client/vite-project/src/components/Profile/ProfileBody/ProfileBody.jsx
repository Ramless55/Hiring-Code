import React, { useState, useEffect } from 'react'
import './ProfileBody.css'
import EditProfile from '../../Button/EditProfile/EditProfile'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from "@mui/material/Typography";
import { fontSize } from '@mui/system';


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
                                <h2 style={{
                                    textAlign:'center',
                                    color: 'var(--color-main)'
                                }}> Informacion Personal</h2>
                                <hr />
                                <h3>Nombre: {(user.name)}</h3>
                                <h3>Apellido: {(user.lastName)}</h3>
                                <h3> Nacimiento: {(user.date)}</h3>
                                <h3>Ubicación: {(user.country)}, {(user.address)} </h3>

                            </div>

                            <div className='right__infoUser'>
                                <h2 style={{
                                    textAlign:'center',
                                    color: 'var(--color-main)'
                                }}> Informacion de Contacto</h2>
                                <hr />
                                <h3>Correo: {(user.email)}</h3>
                                <h3>Telefono: {(user.phone)}</h3>

                            </div>
                        </div>

                            <div >
                                <EditProfile />
                            </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default ProfileBody