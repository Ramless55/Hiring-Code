import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

export default function PaginationRounded(props) {

    const handleChange = (event, value) => {
        props.setActualPage(value)
    }
    
    return (
        <Stack spacing={2}>
            {/* <Pagination count={10} shape="rounded" /> */}
            <div className="row">
                <Pagination count={props.pages} value={event => event.target} variant="outlined" shape="rounded" onChange={handleChange}/>
            </div>
        </Stack>
    );
}