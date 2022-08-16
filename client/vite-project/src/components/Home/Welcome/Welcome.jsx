import React from 'react'
import './Welcome.css'
import HomeIcon from '@mui/icons-material/Home';
import image from '../../../assets/svg/welcome.svg';
// import ButtonDialogOne from '../../Button/HomeButton/ButtonDialogOne/ButtonDialogOne.jsx'
import ButtonDialogTwo from '../../Button/HomeButton/ButtonDialogTwo/ButtonDialogTwo'
import ButtonDialogThree from '../../Button/HomeButton/ButtonDialogThree/ButtonDialogThree.jsx'
import ButtonDialogFour from '../../Button/HomeButton/ButtonDialogFour/ButtonDialogFour'

const Welcome = () => {
    return (
        <>
            <div className="welcome__content">
                <div className="content__left">
                    {/* <HomeIcon sx={{fontSize: "200px"}}/> */}
                    <img className="left__image" src={image}/>
                </div>
                <div className="content__middle">
                    <div className="middle__info">
                        <p>Buenos días, Ezequiel M.</p>
                        <p>Martes 09/08/2022</p>
                    </div>

                    <div className="middle__box">
                        <div className="box__top">
                            {/* <ButtonDialogOne /> */}
                            <ButtonDialogTwo />
                        </div>
                    </div>
                </div>
                <div className="content__right">
                    <div className="right__info">
                        <p>Buenos días, Ezequiel M.</p>
                        <p>Martes 09/08/2022</p>
                    </div>

                    <div className="right__box">
                        <div className="box__top">
                            <ButtonDialogThree />
                            <ButtonDialogFour />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome