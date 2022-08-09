import {useState} from 'react'

//material ui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MuiTelInput, isValidPhoneNumber } from 'mui-tel-input'
import TextField from '@mui/material/TextField';
import { borderColor } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//dependencies
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {

    const [value, setValue] = useState('+54')
    const [isValid, setIsValid] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [errorRegister, setErrorRegister] = useState(false)
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        userName: "",
        password: "",
        phone: "",
        country: "",
        date: "",
        address: "",
        email: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQQRbd29G-mpA196Hhf3uluK6RadWDSQfLg&usqp=CAU",
        rating: 0,
        role: "user",
    })

    const navigate = useNavigate()

    const handleChangePhone = (newValue) => {
        setIsValid(isValidPhoneNumber(newValue))
        setValue(newValue)
        setUser(prev => ({...prev, phone: newValue}))
    }

    const handleInputChange = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name] : event.target.value
        })
        switch (event.target.id) {
            case 'name':
                setUser(prev => ({...prev, name: event.target.value}))
            break;
            case 'lastName':
                setUser(prev => ({...prev, lastName: event.target.value}))
            break;

            case 'userName':
                setUser(prev => ({...prev, userName: event.target.value}))
            break;

            case 'email':
                setUser(prev => ({...prev, email: event.target.value}))
            break;

            case 'password':
                setUser(prev => ({...prev, password: event.target.value}))
            break;

            case 'country':
                setUser(prev => ({...prev, country: event.target.value}))
            break;

            case 'date':
                setUser(prev => ({...prev, date: event.target.value}))
            break;

            case 'address':
                setUser(prev => ({...prev, address: event.target.value}))
            break;

            default:
                break;
        }
    }

console.log(user)

    const handleClick = async (event) => {
        event.preventDefault();
        if(isValid){
            await axios.post(`http://localhost:8080/auth/register`, user)
                .then(res => {
                    if(res.data.status === 'registered'){
                        navigate('/home')
                        setErrorRegister(false)
                    }
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    setErrorRegister(true)
                })
        }else{
            setErrorRegister(true)
        }
    }

    return (
        //poner image rating y role de forma automatica
        <div>
            <h1>Registrate</h1>
            <p>Se parte de nuestra comunidad ahora!</p>
            {errorRegister ? <p style={{color: 'red'}}>*Datos incorrectos, porfavor ingrese bien los datos.</p> : ''}

            <Box>
                <TextField id="name" label="*Nombre" variant="outlined" onChange={handleInputChange}/>
            </Box>
            <TextField id="lastName" label="*Apellido" variant="outlined" onChange={handleInputChange}/>
            <Box>
                <TextField id="userName" label="*Usuario" variant="outlined" onChange={handleInputChange}/>
            </Box>
            <Box>
                <TextField id="email" label="*Email" variant="outlined" onChange={handleInputChange}/>
            </Box>
            <Box>
                <TextField
                    id="password"
                    label="*Contraseña"
                    type="password"
                    onChange={handleInputChange}
                />
            </Box>
            <Box>
                <TextField
                    id="password-repeat"
                    label="*Repetir Contraseña"
                    type="password"
                    onChange={handleInputChange}
                />
            </Box>
            <Box>
                <MuiTelInput value={value} onChange={handleChangePhone} label="Numero Telefonico" id='phone'/>
            </Box>
            <Box>
                <TextField id="country" label="*Pais" variant="outlined" onChange={handleInputChange}/>
            </Box>
            <Box>
                <TextField id="date" label="*Fecha de Nacimiento" variant="outlined" onChange={handleInputChange}/>
            </Box>
            <Box>
                <TextField id="address" label="*Direccion" variant="outlined" onChange={handleInputChange}/>
            </Box>

            <Button variant="contained" onClick={handleClick}>Enviar!</Button>

        </div>
    )
}

export default RegisterPage