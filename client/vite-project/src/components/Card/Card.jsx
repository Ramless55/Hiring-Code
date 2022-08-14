import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// recibir props,
const UserCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    max-height="200"
                    sx={{
                        width: '345px',
                        height: '200px'
                }}
                    image={props.data.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.data.userName}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                    email: {props.data.email}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                    celu: {props.data.phone}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default UserCard