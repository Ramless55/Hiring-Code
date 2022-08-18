import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RatingTestimony from '../RatingTestimony/RatingTestimony'
import { CardActionArea } from '@mui/material';

const TestimonyCard = (props) => {
    const valor = props.value

    return (
        <div>
            <Card sx={{ 
                maxWidth: 345,
                minHeight: 300,
                display: "flex",
                flexDirection:"column",
                alingItems: "center",
                justifyContent: "center",
                border:"1px solid gray",
                borderRadius:"20px",
                }}>

                <CardContent sx={{
                    display: "flex",
                    flexDirection:"column",
                    alingItems: "center",
                    justifyContent: "center",
                    gap:"1rem",
                }}>
                    <Typography 
                    sx={{
                        display: "flex",
                        alingItems: "center",
                        justifyContent: "center",
                    }}  
                    gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.text}
                    </Typography>
                    <RatingTestimony />
                </CardContent>
            </Card>
        </div>
    )
}

export default TestimonyCard