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
import HowPost from '../../../../assets/svg/howPost.svg'
import './ButtonDialogThree.css'
import InfoIcon from '@mui/icons-material/Info';

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

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{margin: 1}}>
                <InfoIcon />&nbsp;&nbsp;COMO CREAR UNA PUBLICACION
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Como publicar
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        ¡Crear una publicación es muy sencillo! Solo tienes que dirigirte al botón
                        que se encuentra debajo a la izquierda llamado "Crear publicacion".
                    </Typography>
                    <Typography gutterBottom>
                        Luego debes escribir el título de tu nueva publicación (recuerda ser conciso
                        en tu anuncio pero no olvidar ningún detalle importante).
                    </Typography>
                    <Typography gutterBottom>
                        Una vez cargado el título pon el precio a tu anuncio. ¿Cuánto vale tu trabajo?
                        Recuerda valer tu esfuerzo y demuestrale a la comunidad cuanto conoces tu oficio. 
                        <img className="ok" src={HowPost}></img>
                    </Typography>
                    <Typography gutterBottom>
                        ¡Sé un profesional a gran escala! Según nuestras estadísticas de este último año
                        HiringCode aumento las posibilidades de los profesionales que confían en nosotros
                        en más de un 87%.
                    </Typography>
                    <Typography gutterBottom>
                        Sé profesional... sé #HiringCode !
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Entendido
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
