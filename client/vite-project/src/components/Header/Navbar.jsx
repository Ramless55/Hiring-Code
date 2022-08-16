import * as React from "react";
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
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { useLocation } from 'react-router-dom';

import { NavLink } from "react-router-dom";

import Dialog from "../Button/HeaderButton/DialogLogin";
import SearchBar from "../SearchBar/SearchBar";

const pages = [
    {
        name: "Landing",
        to: "/",
    },
    {
        name: "home",
        to: "/home",
    },
    {
        name: "Error",
        to: "/cualquiercosa",
    },
    {
        name: "Register",
        to: "/register",
    },
    {
        name: "About-us",
        to: "/about",
        },
        {
        name: "Profile",
        to: '/profile/GonzalezGabi9',
     
    },
    {
        name: "My Profile",
        to: "/my-profile",
    },
]


const ResponsiveAppBar = () => {
    let location = useLocation()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: "whiteSmoke",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AcUnitIcon
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            color: "black",
                            textDecoration: "none",
                        }}
                    />
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
                            color: "#7bf1a8",
                            textDecoration: "none",
                        }}
                    >
                        Young Enterprising
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

                    <SearchBar />

                    <AcUnitIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "#7bf1a8",
                            textDecoration: "none",
                        }}
                    >
                        Young Enterprising
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => {
                            return page.to !== location.pathname ?
                                (<Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    component={NavLink}
                                    to={page.to}
                                    sx={{ my: 2, color: "black", display: "block" }}
                                >
                                    {page.name}
                                </Button>) : (null)
                        })}
                    </Box>

                    <Dialog />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
