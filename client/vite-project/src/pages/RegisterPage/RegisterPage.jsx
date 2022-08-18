import { useEffect, useState } from 'react'
import styles from '../../styles/modules/register.module.css'
import _ from 'lodash';

//material ui
import { MuiTelInput, isValidPhoneNumber } from 'mui-tel-input'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//dependencies
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userRegister } from '../../services/axiosServices';

const RegisterPage = () => {

    const [value, setValue] = useState('+54')
    const [isValid, setIsValid] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [dateValue, setDateValue] = useState(new Date('2001-01-01T21:11:54'));
    const [dateActually, setDateActually] = useState('')
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
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        userName: "",
        password: "",
        passwordRepeat: "",
        phone: "",
        country: "",
        date: "",
        address: "",
        email: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfCfynXv42fOnrTQAs-99j09O8uz7mDilOQ&usqp=CAU",
        rating: 0,
        role: "user",
    })

    const navigate = useNavigate()

    const handleDateChange = (newValue) => {
        setDateValue(newValue);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleClickShowPasswordRepeat = () => {
        setShowPasswordRepeat(!showPasswordRepeat)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                const regExp = new RegExp(/^[a-zA-Z\\s]*$/, 'gi')
                result = !regExp.test(data) || (data.length < 3)
                break;

            case 'lastName':
                const lastNameRegExp = new RegExp(/^[a-zA-Z\\s]*$/, 'gi')
                result = !lastNameRegExp.test(data) || (data.length < 3)
                break;

            case 'userName':
                const userNameRegExp = new RegExp(/^[a-zA-Z0-9]*$/, 'gi')
                result = !userNameRegExp.test(data) || (data.length < 3)
                break;

            case 'email':
                const emailRegExp = new RegExp(/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'gi')
                result = !emailRegExp.test(data) || (data.length < 3)
                break;

            case 'password':
                const passRegExp = new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,15}$/, 'gi')
                data === user.passwordRepeat
                    ? setError(prev => ({ ...prev, passwordRepeat: false }))
                    : setError(prev => ({ ...prev, passwordRepeat: true }))
                result = !passRegExp.test(data) || (data.length < 3)
                break;

            case 'passwordRepeat':
                result = user.password === data ? false : true
                break;

            case 'country':
                const regExpCountry = new RegExp('^[a-zA-Z\\s]*$', 'gi')
                result = !regExpCountry.test(data) || (data.length < 3)
                break;

            case 'address':
                const regExpAddress = new RegExp('^[a-zA-Z0-9\\s]*$', 'gi')
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

    const handleClick = async (event) => {
        event.preventDefault();

        const response = await userRegister ({ ..._.omit(user, "passwordRepeat")})
                if (response.status === 'registered') {
                    navigate('/home')
                    setErrorRegister(false)
                }
                console.log(response)
            .catch(err => {
                console.log(response)
                setErrorRegister(true)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setDisabled(() => { return handleButtonDisable() })
    }, [error])


    useEffect(() => {
        setError(prev => ({ ...prev, phone: !isValid }))
    }, [user])

    useEffect(() => {
        if (dateValue !== null) {
            let day = dateValue.getDate()
            let month = dateValue.getMonth() + 1
            let year = dateValue.getFullYear()

            day < 10 ? day = `0${day}` : ''
            month < 10 ? month = `0${month}` : ''
            
            const date = `${day}/${month}/${year}`
            setUser(prev => ({ ...prev, date: date }))
        }
    }, [dateValue])

    useEffect(() => {
        let auxDate = new Date().getFullYear() - 17
        setDateActually(auxDate.toString())
    })


    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <div>
                    <h1 style={{ marginBottom: '1rem', color: 'black' }}>Registrate</h1>
                    <p style={{color: 'var(--color-main2)'}}>Se parte de nuestra comunidad ahora!</p>
                    {errorRegister ? <p style={{ color: 'red' }}>*El Usuario, Email o Numero ya estan asociados a un usuario.</p> : ''}
                </div>
                <div className={styles.containerInputs}>
                    <div className={styles.firstFive}>
                        <TextField
                            error={error.name}
                            helperText={error.name ? 'No se permiten numeros o simbolos' : ''}
                            sx={{ marginTop: '5%' }}
                            id="name"
                            label="*Nombre"
                            variant="outlined"
                            onChange={handleInputChange('name')}
                        />

                        <TextField
                            error={error.lastName}
                            helperText={error.lastName ? 'No se permiten numeros o simbolos' : ''}
                            sx={{ marginTop: '5%' }}
                            id="lastName"
                            label="*Apellido"
                            variant="outlined"
                            onChange={handleInputChange('lastName')}
                        />

                        <TextField
                            error={error.userName}
                            helperText={error.userName ? 'No se permiten simbolos' : ''}
                            sx={{ marginTop: '5%' }}
                            id="userName"
                            label="*Usuario"
                            variant="outlined"
                            onChange={handleInputChange('userName')}
                        />

                        <TextField
                            error={error.email}
                            helperText={error.email ? 'Utilice un formato valido' : ''}
                            sx={{ marginTop: '5%' }}
                            id="email"
                            label="*Email"
                            variant="outlined"
                            onChange={handleInputChange('email')} />


                        <MuiTelInput
                            error={error.phone}
                            helperText={error.phone ? 'Utilice un formato valido' : ''}
                            sx={{ marginTop: '5%' }}
                            value={value}
                            onChange={handleChangePhone}
                            label="Numero Telefonico"
                            id='phone'
                        />
                    </div>

                    <div className={styles.secondFive}>
                        <FormControl variant="outlined" sx={{ marginTop: '5%' }}>
                            <InputLabel
                                htmlFor="outlined-adornment-password"
                                error={error.password}
                            >*Contraseña</InputLabel>
                            <OutlinedInput
                                error={error.password}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleInputChange('password')}
                                label="Contraseña"
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        {error.password ? <p className={styles.error}>La contraseña debe contener 1 Minuscula 1 Numero 1 Caracter Especial y de 8 a 15 Caracteres de longitud</p> : ''}

                        <FormControl variant="outlined" sx={{ marginTop: '5%' }}>
                            <InputLabel htmlFor="outlined-adornment-password" error={error.passwordRepeat}>*Repetir Contraseña</InputLabel>
                            <OutlinedInput
                                id="passwordRepeat"
                                type={showPasswordRepeat ? 'text' : 'password'}
                                onChange={handleInputChange('passwordRepeat')}
                                label="Repetir Contraseña"
                                error={error.passwordRepeat}
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPasswordRepeat}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        {error.passwordRepeat ? <p className={styles.error}>Las contraseñas deben ser iguales.</p> : ''}

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3} sx={{ marginTop: '5%' }}>
                                <DesktopDatePicker
                                    value={dateValue}
                                    label="Fecha de Nacimiento"
                                    inputFormat="dd/MM/yyyy"
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    maxDate={new Date(dateActually)}
                                    onError={(reason, value) => {
                                        reason === null ?
                                            setError(prev => ({ ...prev, date: false }))
                                            : setError(prev => ({ ...prev, date: true }))
                                    }}
                                />
                            </Stack>
                        </LocalizationProvider>

                        {error.date ? <p className={styles.error}>Formato y/o fecha invalido.</p> : ''}

                        <TextField
                            sx={{ marginTop: '5%' }}
                            id="country"
                            error={error.country}
                            helperText={error.country ? 'No se permiten numeros o simbolos' : ''}
                            label="*Pais"
                            variant="outlined"
                            onChange={handleInputChange('country')}
                        />

                        <TextField
                            sx={{ marginTop: '5%' }}
                            id="address"
                            error={error.address}
                            helperText={error.address ? 'No se permiten simbolos' : ''}
                            label="*Direccion"
                            variant="outlined"
                            onChange={handleInputChange('address')}
                        />

                    </div>
                </div>


                <div className={styles.buttonContainer}>
                    <Button
                        sx={{
                            width: '15vw',
                            height: '7vh',
                            bgcolor: 'var(--color-main2)',
                            '&:hover': {
                                bgcolor: "var(--color-main)",
                            }
                        }}
                        variant="contained"
                        onClick={handleClick}
                        disabled={disabled}>
                        Enviar!</Button>

                </div>

            </div>
        </main>
    )}
export default RegisterPage