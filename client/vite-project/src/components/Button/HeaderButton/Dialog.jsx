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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogLogin = () => {
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
        <div>
            <Button className="button__login" variant="outlined" onClick={handleClickOpen} sx={{
                bgcolor: "black",
                color: "white",
                borderColor: "#333",
                borderRadius: "6px",
                '&:hover': {
                    bgcolor: "inherit",
                    color: 'white',
                    borderColor: "inherit"
                }
            }}>Sign In</Button>
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
                <DialogContent>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput
                        autoFocus
                        margin="dense"
                        id="userName"
                        type="text"
                        fullWidth
                        label="Username"
                    />
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        autoFocus
                        label="Password"
                        margin="dense"
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        fullWidth
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
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
                </DialogContent>
                <DialogActions sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button fullWidth variant="contained" onClick={handleClose} sx={{
                        margin:"2vw"
                    }}>Login</Button>
                </DialogActions>
                <DialogContentText sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p>
                        No tienes una cuenta?
                        <a href='/register' style={{
                            textDecoration:"none",
                            color:"blue"
                        }}> Registrarme</a>
                    </p>
                </DialogContentText>
            </Dialog>
        </div>
    );
}

export default DialogLogin