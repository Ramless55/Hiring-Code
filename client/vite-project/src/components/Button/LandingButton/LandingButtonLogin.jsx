import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';

import _ from 'lodash';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';

import { userLogin } from '../../../services/axiosServices'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LoginButton = (props) => {
const [open, setOpen] = React.useState(false);

const [values, setValues] = React.useState({
    userName: '',
    password: '',
    showPassword: false,
});

const handleLogin = async (event) => {
    event.preventDefault();

    const response = await userLogin({
        ..._.omit(values, 'showPassword')
    })
    if (response.status === 'logged in') {
        localStorage.setItem('Token', JSON.stringify(response.token))
        localStorage.setItem('User', JSON.stringify(response.user))
        handleClose()
        window.location.reload()
        window.location.href=('/home')
    } else {
        console.log(response)
        alert('Usuario no encontrado')
    }
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

const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    })
}

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

return (
    <div style={{boxSizing:"border-box"}}>
        <Button variant="contained"
        onClick={handleClickOpen}
        sx={{
            
            bgcolor:"rgb(154, 205, 50)",
            borderRadius: "8px",
            padding: "0.6em 1.2em",
            fontSize:"1em",
            '&:hover': {
                bgcolor:"rgb(130, 169, 53)",
            }
        }}>
            {props.name}</Button>

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
                }}>Iniciar Sesion</DialogTitle>
                <hr />
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <TextField
                        fullWidth
                        id="lastName"
                        type="text"
                        onChange={handleChangeUserName}
                        label="Usuario"
                        variant="outlined"
                        autoFocus
                        margin="dense"

                    />
                    <FormControl variant="outlined" sx={{ marginTop: "1rem" }}>
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                        >Contraseña</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword}
                            label="Contraseña"
                            endAdornment={
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button fullWidth variant="contained" type={'submit'}  onClick={handleLogin} sx={{
                        marginRight: "15px",
                        marginLeft: "15px",
                        bgcolor: 'var(--color-main)',
                        '&:hover': {
                            bgcolor: "var(--color-main2)"
                        }
                    }}>Login</Button>
                </DialogActions>
                <DialogContentText sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p style={{
                        padding: "20px"
                    }}>
                        No tienes una cuenta?
                        <a href='/register' style={{
                            textDecoration: "none",
                            color: "var(--color-main)",
                        }}> Registrate</a>
                    </p>
                </DialogContentText>
            </Dialog>
        </div>
    );
}

export default LoginButton