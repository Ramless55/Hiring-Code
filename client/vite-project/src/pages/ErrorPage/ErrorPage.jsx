import { Button } from '@mui/material'
import { useEffect } from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
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
            <>
                <div className='container'>
                    <div className='content'>
                        <div className='contentFlex'>
                            <div className='cursorShadow' style={{
                                position: "absolute",
                                width: "0.01px",
                                height: "0.01px",
                                border: "none",
                                background: "rgba(255,255,255,.1)",
                                borderRadius: "50%",
                                boxShadow: "0px 0px 200px 100px rgba(255,255,255,.1)"
                            }}></div>
                            <h1>
                                No se encontró la página
                            </h1>
                            <h5>Mmm, la página que está s buscando parece que ya no existe.</h5>
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
            </>
        )
}

export default ErrorPage