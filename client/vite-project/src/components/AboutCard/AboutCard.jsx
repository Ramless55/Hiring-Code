import './AboutCard.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const AboutCard = (props) => {
    return (
        <div className='aboutCard__container'>
            <Card sx={{
                maxWidth: 345,
                borderRadius: "20px",
            }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.image}
                    alt="green iguana"
                />
                <CardContent>
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
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default AboutCard