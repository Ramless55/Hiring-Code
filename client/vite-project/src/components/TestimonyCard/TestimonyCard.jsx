import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RatingTestimony from '../RatingTestimony/RatingTestimony'
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion'

const TestimonyCard = (props) => {
    const valor = props.value

    return (
        <motion.div
        initial={{ opacity: 0, x: 200, }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            <Card sx={{ 
                maxWidth: 345,
                minHeight: 300,
                display: "flex",
                flexDirection:"column",
                alingItems: "center",
                justifyContent: "center",
                border:"1px solid gray",
                borderRadius:"20px",
                transition: "all .1s ease-in-out",
                    '&:hover':{
                        transform: "scale(1.05)",
                        cursor: "pointer",
                    }
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
                    <Typography sx={{color:"#3d464d",}} variant="body2" color="text.secondary">
                        {props.text}
                    </Typography>
                    <RatingTestimony />
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default TestimonyCard