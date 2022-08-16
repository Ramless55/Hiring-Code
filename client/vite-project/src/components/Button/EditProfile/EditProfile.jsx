import { useEffect, useState } from 'react'

//material ui
import { MuiTelInput, isValidPhoneNumber } from 'mui-tel-input'
import { useNavigate } from 'react-router-dom'


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';

import { getMyProfile, putMyProfile } from '../../../services/axiosServices'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EditProfile = () => {
    const [localData, setLocalData] = useState({
        localData: JSON.parse(localStorage.getItem("User")),
    })
    const userId = localData.localData.id

    const [open, setOpen] = React.useState(false);

    const [value, setValue] = useState('+54')
    const [isValid, setIsValid] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [dateValue, setDateValue] = useState(new Date('2001-01-01T21:11:54'));
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

    console.log(user)

    // const [newData, setNewData] = useState([])

    const navigate = useNavigate()

    const handleDateChange = (newValue) => {
        setDateValue(newValue);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleChangePhone = (newValue) => {
        setIsValid(isValidPhoneNumber(newValue))

        setValue(newValue)
        setUser(prev => ({ ...prev, phone: newValue }))
    }

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

    const handleChangeUserName = (event) => {
        setValues(prev => ({ ...prev, userName: event.target.value }))
    }

    const handleChangePassword = (event) => {
        setValues(prev => ({ ...prev, password: event.target.value }))
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setDisabled(() => { return handleButtonDisable() })
    }, [error])


    useEffect(() => {
        setError(prev => ({ ...prev, phone: !isValid }))
        console.log(user)
    }, [user])

    // useEffect(() => {
    //     getMyProfile({ setUser, userId })
    // }, [])

    const handleClick = async (event) => {
        event.preventDefault();

        const response = await putMyProfile({user,userId})
        if (response.status === 'updated') {
            navigate('/my-profile')
            setErrorRegister(false)
        }
        console.log(response)
            .catch(err => {
                console.log(response)
                setErrorRegister(true)
            })
    }

    return (
        <div>
            <Button className="button__login" variant="outlined" onClick={handleClickOpen} sx={{
                bgcolor: "black",
                color: "white",
                borderColor: "#333",
                borderRadius: "6px",
                '&:hover': {
                    bgcolor: "inherit",
                    color: 'black',
                    borderColor: "#808080"
                }
            }}>

                Edit</Button>
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
                        // label="*Nombre"
                        value={user.name}
                        variant="outlined"
                        onChange={handleInputChange('name')}
                    />

                    <TextField
                        error={error.lastName}
                        helperText={error.lastName ? 'No se permiten numeros o simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="lastName"
                        // label="*Apellido"
                        value={user.lastName}
                        variant="outlined"
                        onChange={handleInputChange('lastName')}
                    />

                    <TextField
                        error={error.userName}
                        helperText={error.userName ? 'No se permiten simbolos' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="userName"
                        // label="*Usuario"
                        value={user.userName}
                        variant="outlined"
                        onChange={handleInputChange('userName')}
                    />

                    <TextField
                        error={error.email}
                        helperText={error.email ? 'Utilice un formato valido' : ''}
                        sx={{ marginTop: '1rem' }}
                        id="email"
                        // label="*Email"
                        value={user.email}
                        variant="outlined"
                        onChange={handleInputChange('email')} />

                    <TextField
                        sx={{ marginTop: '1rem' }}
                        id="address"
                        // label="*Direccion"
                        value={user.address}
                        variant="outlined"
                        onChange={handleInputChange('address')}
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