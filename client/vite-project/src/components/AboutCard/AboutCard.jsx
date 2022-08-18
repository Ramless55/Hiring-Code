import * as React from 'react';
import './AboutCard.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
//MATERIAL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { height } from '@mui/system';

const AboutCard = ({ user }) => {
    const [info, setInfo] = useState({})

    const githubUser = () => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(res => setInfo(res.data))
    }

    const visitGithub = () => {
        window.open(info.html_url, "_blank")
    }

    useEffect(() => {
        githubUser()
    }, [])

    return (
        <div className='aboutCard__container'>
            <Card sx={{
                minWidth: 400,
                maxWidth: 400,
                minHeight: 450,
                borderRadius: "20px",
                boxShadow: "0 0 10px rgba(0,0,0,0.7)",
            }}>
                <CardActionArea onClick={visitGithub}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={info.avatar_url}
                        alt="programmer image"
                        sx={{
                            maxHeight: '300px',
                        }}
                    />
                    <CardContent sx={{
                        display:"flex",
                        flexDirection:"column",
                        alingItems:"center",
                        justifyContent:"space-between",
                        gap:"1rem",
                    }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                display: "flex",
                                alingItems: "center",
                                justifyContent: "center",
                                
                            }}
                        >
                            {info.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontFamily: "Roboto",
                                color: "var(--font-dark)",
                                height: "5vh",
                                display: "flex",
                                alingItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {info.bio && 
                                info.bio.includes(':coffee:') ?
                                info.bio.split(':coffee:')[1]
                                : info.bio
                            }
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontFamily: "Roboto",
                                color: "var(--font-dark)",
                                height: "5vh",
                                display: "flex",
                                alingItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {"📍 " + info.location}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default AboutCard