import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
    const [value, setValue] = React.useState(2);

    return (
        <Box sx={{'& > legend': { mt: 0 } }} >
            {/* <Typography component="legend">No rating given</Typography> */}
            <Rating name="no-value" value={null} />
        </Box>
    );
}