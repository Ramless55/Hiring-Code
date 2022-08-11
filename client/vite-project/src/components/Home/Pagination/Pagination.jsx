import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

export default function PaginationRounded() {
    return (
        <Stack spacing={2}>
            {/* <Pagination count={10} shape="rounded" /> */}
            <div className="row">
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </Stack>
    );
}