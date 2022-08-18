import * as React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const RatingTestimony = (props) => {
    const [value, setValue] = React.useState(5);


    return (
        <div>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                    display: "flex",
                    alingItems: "center",
                    justifyContent: "center",
                }}
            >
                <Rating name="read-only" value={value} readOnly />
             </Box>
        </div>
    )
}

export default RatingTestimony