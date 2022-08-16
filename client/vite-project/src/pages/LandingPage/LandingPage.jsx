import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import cardImage from '../../assets/img/card_image.jpg'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import LoginButton from '../../components/Button/LandingButton/LandingButtonLogin'
import RegisterButton from '../../components/Button/LandingButton/LandingButtonRegister'
import './LandingPage.css'

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const firstSection = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <AnimatedPage>
      <div className='container__landing-page'>
        <div className='landing__content-1'>
          <div className='filter-content-1'>
            <motion.div
              className='section-header'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <div>
                <a href="#sect-1">Sección 1</a>
              </div>
              <div>
                <a href="#sect-2">Sección 2</a>
              </div>
              <div>
                <a href="#sect-3">Novedades</a>
              </div>
            </motion.div>
            <div className='landing__content-1-title'>
              <motion.h1
                variants={firstSection}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                Anunciate <span className='title-span'>Ya!</span>
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                Anunciate en la página Nº1 en busqueda laboral y prestación de servivicios
              </motion.h3>
            </div>
            <motion.div
              className='landing__content-login-register'
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <p>Buscá tu empleo o brindá tu servicio ahora.</p>
              <div className='container__button'>
                <RegisterButton name={"Registrarme"} />
                <LoginButton name={"Ingresar"}/>
                
              </div>
            </motion.div>
          </div>
        </div>

        <div className='landing__content-4' id='sect-3'>
          <h1>Novedades</h1>
          <div className='landing__content-4-container'>
            <div className='content-4-card-animation'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 1</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt neque, itaque quasi saepe voluptate doloribus quia qui omnis exercitationem incidunt magnam debitis molestias odio deleniti dolorem repudiandae iusto. Dolores.</p>
              <a href="#">Ver más</a>
            </div>
            <div className='content-4-card-animation'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 2</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt neque, itaque quasi saepe voluptate doloribus quia qui omnis exercitationem incidunt magnam debitis molestias odio deleniti dolorem repudiandae iusto. Dolores.</p>
              <a href="#">Ver más</a>
            </div>
            <div className='content-4-card-animation'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 3</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt neque, itaque quasi saepe voluptate doloribus quia qui omnis exercitationem incidunt magnam debitis molestias odio deleniti dolorem repudiandae iusto. Dolores.</p>
              <a href="#">Ver más</a>
            </div>
          </div>
        </div>


        <motion.div
          className='landing__content-3'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <div className='landing__content-3-first' id='sect-2'>
            <div className='landing__content-3-first-filter'>
              <div>
                <h2>Sample title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
                <button className='button-more-info'>+ Info</button>
              </div>
            </div>
          </div>
          <motion.div className='landing__content-3-second'
            initial={{ opacity: 0, overflow: "hidden" }}
            whileInView={{ opacity: 1, overflow: "hidden" }}
            transition={{ ease: 'easeInOut', duration: 1 }}
          >
            <div className='content-3-second-box1'>
              <motion.div
                initial={{ opacity: 0, x: -200, }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ ease: 'easeInOut', duration: 1 }}>
                <h2>Sample title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
              </motion.div>
            </div>
            <div
              className='content-3-second-box2'
            >

              <motion.div
                initial={{ opacity: 0, x: 200, }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ ease: 'easeInOut', duration: 1 }}>
                <h2>Sample title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className='landing__content-2' id='sect-1'>
          <div className='landing__content-2-title'>
            <h1>Opiniones</h1>
          </div>

          <motion.div
            className='container__cards'
            initial={{}}
            animate={{}}
            transition={{}}
          >
            <div className='container__cards-card'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iusto blanditiis ea. Magni, quaerat illum nulla, sit possimus inventore dolorum laborum est odio doloribus vel nobis sapiente modi rem ipsa.</p>
            </div>
            <div className='container__cards-card'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iusto blanditiis ea. Magni, quaerat illum nulla, sit possimus inventore dolorum laborum est odio doloribus vel nobis sapiente modi rem ipsa.</p>
            </div>
            <div className='container__cards-card'>
              <img src={cardImage} alt="Imagen" />
              <h3>Titulo 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus iusto blanditiis ea. Magni, quaerat illum nulla, sit possimus inventore dolorum laborum est odio doloribus vel nobis sapiente modi rem ipsa.</p>
            </div>
          </motion.div>
        </div>

        <div className='landing__content-5'>
          <div>
            <h3>¿Aun no te decidís?</h3>
            <p>¡Comenzá por registrarte para conseguir empleo o brindar tus servicios!</p>
            <RegisterButton name={"Registrarme"}/>
          </div>
        </div>
      </div>
    </ AnimatedPage>
  )
}

export default LandingPage