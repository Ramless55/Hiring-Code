import { Button } from '@mui/material'
import { useEffect } from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursorShadow')
        const mouseFunction = (value) => {
            let x = value.clientX
            let y = value.clientY
            cursor.style.left = x + "px"
            cursor.style.top = y + "px"
        }
        document.addEventListener("mousemove", mouseFunction)
        return () => document.removeEventListener("mousemove", mouseFunction)
    }, [])


    return (
        <div className='container'>
            <div className='content'>
            <div className='contentFlex'>
                <div className='cursorShadow' style={{
                    position: "absolute",
                    border: "none",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 300px 115px rgba(200,200,200,0.5)"
                }}></div>
                <h1>
                    No se encontró la página
                </h1>
                <h5>Mmm, la página que estás buscando parece que ya no existe.</h5>
                <Button className="button" variant="outlined" href="/" sx={{
                    bgcolor: "white",
                    color: "black",
                    borderColor: "white",
                    '&:hover': {
                        bgcolor: "inherit",
                        color: 'white',
                        borderColor: "inherit"
                    }
                }}>Volver al inicio</Button>
            </div>
        </div>
        </div>
        
    )
}

export default ErrorPage