import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CssBaseline, Switch } from '@mui/material';


const settings = ['Mi Perfil', 'Logout'];

const ProfileButton = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const image = JSON.parse(localStorage.getItem("User")).image

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOptions = (key) => (event) => {
        switch (key) {
            case 'Mi Perfil':
                window.location.href=('/my-profile')
                
                break;

            case 'Logout':
                localStorage.clear()
                window.location.reload()
                break;

            default:
                break;
        }
    }

    return (
        <>
            <CssBaseline />
            <Tooltip title="Open settings" >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={image} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' , flexGrow: 0, position: 'fixed'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <Box onClick={handleOptions(setting)}>
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    </Box>
                ))}
            </Menu>
        </>
    );
}

export default ProfileButton;