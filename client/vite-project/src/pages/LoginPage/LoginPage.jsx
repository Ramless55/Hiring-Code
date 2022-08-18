import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../styles/modules/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)
    const navigate = useNavigate()

    let form = {
        username: user,
        password: password
    }

    const handleChangeUser = (event) => {
        setUser(event.target.value)
    }

    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }

    console.log(form)

    const handleClick = async (event) => {
        event.preventDefault();
        // let jsonForm = JSON.stringify(form)
        // console.log(jsonForm)
        await axios.post(`http://localhost:8080/auth/login`, form)
            .then(res => {
                if (res.data.status === 'logged in') {
                    localStorage.setItem('Token', JSON.stringify(res.data.token))
                    localStorage.setItem('User', JSON.stringify(res.data.user))
                    navigate('/home')
                    setErrorLogin(false)
                }
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setErrorLogin(true)
            })
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='container-of-login'>
                <div style={{ backgroundColor: 'grey' }}>
                    {errorLogin ?
                        <p style={{ color: 'red' }}>
                            *Usuario y/o Constraseña invalidos, vuelva a intentar.
                        </p>
                        : ''
                    }
                    <TextField
                        id="userInput"
                        onChange={handleChangeUser}
                        label="Usuario"
                    />
                    <TextField
                        id="passwordInput"
                        onChange={handleChangePass}
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                    />

                    <Button onClick={handleClick} variant="ingresar" sx={{ border: '.5px solid black' }}>Ingresar</Button>

                </div>
            </div>
        </Box>
    )
}

export default LoginPage