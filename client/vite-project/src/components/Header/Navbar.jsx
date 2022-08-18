import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import Logo from '../../assets/img/logo.png'
import './Navbar.css'

import { useLocation } from 'react-router-dom';

import { NavLink } from "react-router-dom";

import Dialog from "../Button/HeaderButton/DialogLogin";
import ProfileIcon from "../Button/ProfileIcon/ProfileIcon"
import SearchBar from "../SearchBar/SearchBar";

const pages = [
    {
        name: "Inicio",
        to: "/",
    },
    {
        name: "Menu",
        to: "/home",
    },
    {
        name: "¿Quienes Somos?",
        to: "/about",
    },
]


const ResponsiveAppBar = () => {
    let location = useLocation()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [logged, setLogged] = useState(false)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('Token'))
        if (token !== null) {
            setLogged(true)
        } else {
            setLogged(false)
            localStorage.clear()
        }

    }, [])

    return (
        <AppBar
            position="absolute"
            sx={{
                bgcolor: "whiteSmoke",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    {/* <AcUnitIcon
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            color: "black",
                            textDecoration: "none",
                        }}
                    /> */}
                    <img className="Logo" src={Logo}></img>
                    {/* Titulo inicio  */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            textDecoration: "none",
                            color: 'var(--color-main)',
                            '&:hover': {
                                color: "var(--color-main2)"
                            }
                            }
                        }
                            >
                            Hiring Code
                    </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    {/* icon de menu desplegable */}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{ color: "black" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Menu desplegable con opciones */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => {
                            return page.to !== location.pathname ? (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    component={NavLink}
                                    to={page.to}

                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            color: "black",
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ) : (null)
                        })}
                    </Menu>
                </Box>

                {/* <AcUnitIcon
                    sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
                /> */}
                
                {/* Titulo  mobile*/}
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        textDecoration: "none",
                        color: "var(--color-main)",
                        '&:hover': {
                            color: "var(--color-main2)",
                        }
                    }}
                >
                    Hiring Code
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {/* menu de incio */}
                    {pages.map((page) => {
                        return page.to !== location.pathname ?
                            (<Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                component={NavLink}
                                to={page.to}
                                sx={{ my: 2, color: "black", display: "block", }}
                            >
                                {page.name}
                            </Button>) : (null)
                    })}
                </Box>

                <SearchBar />

                {!logged
                    ? <Dialog />
                    : <ProfileIcon />
                }

            </Toolbar>
        </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
