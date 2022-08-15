import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import NewPost from '../../PostCard/NewPost/NewPost'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        document.body.style.overflow = 'auto'
        return () => document.body.style.overflow = 'auto'
    }, [])

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(true)
        setValue(event.target.value);
    };

    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div>
                <Button variant="outlined" onClick={handleClickOpen} sx={{ margin: 1, backgroundColor: 'palette.success.dark ', color: 'primary.info' }} >
                    Crear publicacion <AddCircleIcon sx={{ marginLeft: '0.5rem' }} />
                </Button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    maxWidth={'xl'}
                    align="center"
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                        Crear nueva publicación
                    </BootstrapDialogTitle>
                    <DialogContent dividers>

                        <div style={{ width: 500, display: 'flex', flexDirection: 'column' }}>

                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Titulo"
                                autoFocus
                                margin='dense'
                                type='text'
                            />

                            <TextField
                                sx={{ marginTop: '1rem' }}
                                fullWidth
                                required
                                id="outlined-required"
                                label="Precio por hora"
                                autoFocus
                                margin='dense'
                                type='text'
                            />

                            <TextField
                                sx={{ marginTop: '1rem' }}
                                id="outlined-multiline-flexible"
                                label={value ? value.length + '/600' : 'Ingrese una descripcion *'}
                                multiline
                                minRows={12}
                                maxRows={12}
                                value={value}
                                onChange={handleChange}
                                inputProps={{ maxLength: 600 }}
                            />

                            
                            

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                        <Button variant="contained" color="success">
                                Crear nueva publicación
                            </Button>
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </Box >
    );
}
