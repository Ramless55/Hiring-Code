import { useState, useEffect } from 'react';
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
import { postPublications } from '../../../services/axiosServices';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import Label from '../Label/Label'


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

export default function CustomizedDialogs(props) {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date())
    const [publicationData, setPublicationData] = useState({
        created_by:{},
        title: "",
        description: "",
        created_date: "",
        price: "",
        labels: [],
    })
    const [error, setError] = useState({
        title: false,
        description: false,
        created_date: false,
        price: false,
        labels: false,
    })
    

    const checkData = (key, data) => {
        let result = false;
        
        switch (key) {
            case 'title':

                break;

            case 'description':

                break;

            case 'created_date':

                break;

            case 'price':

                break;

            case 'labels':

                break;

            default:
                break;
        }
        return result
    }

    const handleClickOpen = () => {
        !props.logged
        ? alert("¡Inicia sesion para poder publicar ahora!") 
        : setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        props.logged ?
        postPublications(publicationData) 
        : ''
    }
    const handleInputChange = (key) => (event) => {
        setPublicationData((prev) => {
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

    useEffect(() => {
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        day < 10 ? day = `0${day}` : ''
        month < 10 ? month = `0${month}` : ''
        
        const dateTransform = `${day}/${month}/${year}`
        setPublicationData(prev => ({ ...prev, created_date: dateTransform}))
        
    }, [])

    useEffect(() => {

            props.logged ? setPublicationData(prev => ({ ...prev, created_by: props.user })) : ''

    }, [props.logged])

    useEffect(() => {
        document.body.style.overflow = 'auto'
        return () => document.body.style.overflow = 'auto'
    }, [])

    useEffect(() => {
        console.log(publicationData)
    }, [publicationData])

    // console.log(`ButtonPost ${publicationData.labels}`)

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
                <AddCircleIcon sx={{ marginLeft: '0.5rem' }} />&nbsp;&nbsp;Crear publicacion 
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
                                id="title"
                                label="Titulo"
                                autoFocus
                                margin='dense'
                                type='text'
                                onChange={handleInputChange('title')}
                            />

                            <TextField
                                sx={{ marginTop: '1rem' }}
                                fullWidth
                                required
                                id="price"
                                label="Precio por hora"
                                autoFocus
                                margin='dense'
                                type='text'
                                onChange={handleInputChange('price')}
                            />

                            <TextField
                                sx={{ marginTop: '1rem' }}
                                id="description"
                                label={publicationData.description !== "" ? publicationData.description.length + '/600' : 'Ingrese una descripcion *'}
                                multiline
                                minRows={12}
                                maxRows={12}
                                value={publicationData.description}
                                onChange={handleInputChange('description')}
                                inputProps={{ maxLength: 600 }}
                            />

                            <Label setPublicationData={setPublicationData} publicationData={publicationData} />

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                        <Button variant="contained" color="success" onClick={handleClick} disabled={!props.logged}>
                                Crear nueva publicación
                            </Button>
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </Box >
    );
}
