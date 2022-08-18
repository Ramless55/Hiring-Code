import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LandingRegister = (props) => {
  return (
    <div>
        <Button 
        variant="contained"
        href='/register'
        sx={{
            bgcolor:"rgb(154, 205, 50)",
            borderRadius: "8px",
            padding: "0.6em 1.2em",
            fontSize:"1em",
            '&:hover': {
                bgcolor:"rgb(130, 169, 53)",
            }
        }}
        >
            {props.name}
        </Button>
        
    </div>
  )
}

export default LandingRegister