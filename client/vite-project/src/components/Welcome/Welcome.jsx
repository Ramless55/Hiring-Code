import React from 'react'
import './Welcome.css'
import HomeIcon from '@mui/icons-material/Home';

const Welcome = () => {
    return (
        <div className="welcome__content">
            <div className="content__left">
                <HomeIcon sx={{fontSize: "200px"}}/>
            </div>
            <div className="content__right">
                <p>Buenos días, Ezequiel M.</p>
                <p>Martes 09/08/2022</p>
            </div>
        </div>
    )
}

export default Welcome