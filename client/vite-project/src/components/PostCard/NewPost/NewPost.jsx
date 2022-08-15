import React from 'react'
import './NewPost.css'
import profile from '../../../assets/img/profile.png'
import Rating from '../Rating/Rating'
import NewPost from '../../Button/NewPost/NewPost'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PostCard = () => {
    return (

        <div style={{ width: 500, display: flex }}>
        <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Titulo"
                    autoFocus
                    margin='dense'
                    type='text'
                />
            </Box>
                
        </div>
    )
}

export default PostCard