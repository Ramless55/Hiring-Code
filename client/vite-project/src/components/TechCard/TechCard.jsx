import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './TechCard.css'

const TechCard = (props) => {

    const visitPage = () => {
        window.open( props.page, "_blank")
    }
  return (
    <CardActionArea sx={{
        display:"flex",
        height:"100%",
        width:"22vw",
        flexDirection:"column",
        alingItems:"center",
        justifyContent:"center",
        borderRadius:"50%",
        
        
    }} 
    onClick={visitPage} >
        <div className='content-4-card-animation'>
              <img src={props.image} alt="Imagen" />
              <h3>{props.title}</h3>
              <p>{props.text}</p>
        </div>
    </CardActionArea>
  )
}

export default TechCard