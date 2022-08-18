import { useEffect, useState } from 'react'
import _ from 'lodash';


//material ui
import { useNavigate } from 'react-router-dom'


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';

import { putMyProfile } from '../../../services/axiosServices'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EditProfile = () => {
    const [open, setOpen] = React.useState(false);
    const [errorRegister, setErrorRegister] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState({
        name: false,
        lastName: false,
        userName: false,
        password: false,
        phone: false,
        country: false,
        date: false,
        address: false,
        email: false
    })

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('User'))
    )

    const navigate = useNavigate()

    const handleButtonDisable = () => {
        let result = true

        result = result && !Object.values(error).some(error => error)

        result = result && Object.values(user).every(text => text !== '')

        return !result
    }

    const checkData = (key, data) => {
        let result = false;

        switch (key) {
            case 'name':
                const regExp = new RegExp('^[a-zA-Z\\s]*$', 'gi')
                result = !regExp.test(data) || (data.length < 3)
                break;

            case 'lastName':
                const lastNameRegExp = new RegExp('^[a-zA-Z\\s]*$', 'gi')
                result = !lastNameRegExp.test(data) || (data.length < 3)
                break;

            case 'userName':
                const userNameRegExp = new RegExp('^[a-zA-Z1-9]*$', 'gi')
                result = !userNameRegExp.test(data) || (data.length < 3)
                break;

            case 'email':
                const emailRegExp = new RegExp('^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$', 'gi')
                result = !emailRegExp.test(data) || (data.length < 3)
                break;

            case 'address':
                const regExpAddress = new RegExp('^[a-zA-Z\\s]*$', 'gi')
                result = !regExpAddress.test(data) || (data.length < 3)
                break;

            default:
                break;
        }
        return result
    }

    const handleInputChange = (key) => (event) => {
        setUser((prev) => {
            return {
                ...prev,
                [key]: event.target.value
            }
        })
        setError((prev) => {
            return {
                ...prev,
                [key]: checkData(key, event.target.value)
            }
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setDisabled(() => { return handleButtonDisable() })
    }, [error])


    useEffect(() => {
        setError(prev => ({ ...prev, phone: !isValid }))
    }, [user])

    const handleClick = async (event) => {
        event.preventDefault();
        console.log(user)
        const idUser = { id: user.id }
        const response = await putMyProfile(user.id, user)
        if (response?.status.toString() === 'updated') {
            localStorage.removeItem('User')
            const aux = response.user
            localStorage.setItem('User', JSON.stringify(Object.assign(idUser, aux)))
            navigate('/my-profile')
            setErrorRegister(false)
        } else {
            console.log(response?.error)
        }
    }

    return (
        <div>
            <Button className="button__login" variant="outlined" onClick={handleClickOpen} sx={{
                bgcolor: "white",
                color: "black",
                borderColor: "#333",
                borderRadius: "6px",
                marginTop: '1rem',
                '&:hover': {
                    bgcolor: "#52b69a",
                    color: 'white',
                    borderColor: "white"
                }
            }}>

                Editar información personal</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>Edite su informacion de Usuario</DialogTitle>
                <hr />
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >

                    <TextField
                        error={error.name}
                        helperText={error.name ? 'No se permiten numeros o simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="name"
                        label="Nombre"
                        value={user.name}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange('name')}
                    />

                    <TextField
                        error={error.lastName}
                        helperText={error.lastName ? 'No se permiten numeros o simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="lastName"
                        label="Apellido"
                        value={user.lastName}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange('lastName')}
                    />

                    <TextField
                        error={error.userName}
                        helperText={error.userName ? 'No se permiten simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="userName"
                        label="Usuario"
                        value={user.userName}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange('userName')}
                    />

                    <TextField
                        error={error.email}
                        helperText={error.email ? 'Utilice un formato valido' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="email"
                        label="Email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={user.email}
                        variant="outlined"
                        onChange={handleInputChange('email')} />

                    <TextField
                        sx={{ marginTop: '1rem' }}
                        id="address"
                        label="Direecion"
                        value={user.address}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleInputChange('address')}
                    />

                    <TextField
                        // error={error.userName}
                        // helperText={error.userName ? 'No se permiten simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="userName"
                        label="Iamgen URL"
                        value={user.image}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange('image')}
                    />

                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button fullWidth variant="contained" onClick={handleClick}
                        sx={{
                            marginRight: "15px",
                            marginLeft: "15px",
                        }}>submit</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default EditProfile