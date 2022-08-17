import { useState, useEffect } from 'react'
import './Welcome.css'
import HomeIcon from '@mui/icons-material/Home';
import image from '../../../assets/svg/welcome.svg';
// import ButtonDialogOne from '../../Button/HomeButton/ButtonDialogOne/ButtonDialogOne.jsx'
// import ButtonDialogTwo from '../../Button/HomeButton/ButtonDialogTwo/ButtonDialogTwo'
import ButtonDialogThree from '../../Button/HomeButton/ButtonDialogThree/ButtonDialogThree.jsx'
// import ButtonDialogFour from '../../Button/HomeButton/ButtonDialogFour/ButtonDialogFour'

const Welcome = (props) => {
    const [dateTransform, setDateTransform] = useState('')

    useEffect(() => {
        const date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let numberDay = date.getDay()
        let wordDay

        switch (numberDay) {
            case 1:
                wordDay = 'Lunes'
                break;

            case 2:
                wordDay = 'Martes'
                break;

            case 3:
                wordDay = 'Miercoles'
                break;

            case 4:
                wordDay = 'Jueves'
                break;

            case 5:
                wordDay = 'Viernes'
                break;

            case 6:
                wordDay = 'Sabado'
                break;

            case 7:
                wordDay = 'Domingo'
                break;

            default:
                break;
        }

        day < 10 ? day = `0${day}` : ''
        month < 10 ? month = `0${month}` : ''

        setDateTransform(`${wordDay} ${day}/${month}/${year}`)

        // console.log(props.logged)

        //esto realmente funcionara cuando agreguemos redux para el estado global de logeo
    }, [])

    return (
        <>
            <div className="welcome__content">
                <div className="content__left">
                    <img className="left__image" src={image} />
                </div>
                <div className="content__right">
                    <div className="right__info">
                        <p className='name'>{props.logged ? `¡Buenos dias ${props.user.name} ${props.user.lastName}!` : '¡Buenos dias!'}</p>
                        <p className='day'>{dateTransform}</p>
                    </div>

                    <div className="right__box">
                        <div className="box__top">
                            <ButtonDialogThree />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome