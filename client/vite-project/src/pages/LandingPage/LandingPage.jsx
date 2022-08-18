import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import cardImage from '../../assets/img/card_image.jpg'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import LoginButton from '../../components/Button/LandingButton/LandingButtonLogin'
import RegisterButton from '../../components/Button/LandingButton/LandingButtonRegister'
import './LandingPage.css'
import landing_news from '../../assets/img/landing_news.jpg' 
import TestimonyCard from '../../components/TestimonyCard/TestimonyCard'
import RatingTestimony from '../../components/RatingTestimony/RatingTestimony'

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

        <motion.div className='landing__content-3' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className='landing__content-3-first' id='sect-2'>
            <div className='landing__content-3-first-filter'>
              <div>
                <h2>¿Por qué nosotros?</h2>
                <p>Nuestra plataforma es intuitiva y centrada en la facilidad de buscar empleo en la industia de TI</p>
                <a className='button__template' href='#info-target'>+ INFO</a>
              </div>
            </div>
          </div>
          <motion.div className='landing__content-3-second' id='info-target'
            initial={{ opacity: 0, overflow: "hidden" }}
            whileInView={{ opacity: 1, overflow: "hidden" , transition: { ease: 'easeInOut', duration: 0.5 }}}
            viewport={{ once: true , amount: 0.8}}
          >
            <div className='content-3-second-box1'>
              <motion.div
                initial={{ opacity: 0, x: -200, }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                >
                <h2>Comunidad</h2>
                <p>Tenemos una comunidad de personas involucradas en la industria de TI que está en constante crecimiento. No te prives de ser parte de nosotros y conseguir tu puesto en la industria Tech</p>
              </motion.div>
            </div>
            <div className='content-3-second-box2'>
              <motion.div
                initial={{ opacity: 0, x: 200, }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}>
                <h2>Soporte 24/7</h2>
                <p>Nuestro equipo de desarrolladores esta pendiente de cualquier duda con respecto a la página las 24 hs.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className='landing__content-2' id='sect-1'>
          <div className='landing__content-2-title'>
            <h1>Testimonios</h1>
          </div>
          <motion.div
            className='container__cards'
            initial={{}}
            animate={{}}
            transition={{}}
          >
            <TestimonyCard name={"María"} text={"No le tenía mucha fé a la página pero al final decidí intentar registrandome. Ni bien inicié aparecían un montón de publicaciones de empresas personas especialistas en TI. Conseguí bastantes entrevistas alrededor de 2 semanas. Siento que es una buena señal y que mi empleo como desarrolladora está cerca."}/>
            <TestimonyCard name={"Osvaldo"} text={'Me encantó el sitio, hace mucho tiempo que buscaba una página que me permita buscar empleo como desarrollador de una forma sencilla, como nos permite brinda Anunciate Ya! La recomiendo un montón para aquellos desarrolladores "Trainee" y "Jr." '}/>
            <TestimonyCard name={"Cristina"} text={'Terminé mi curso como Full Stack Developer en el stack MERN en Global Learning y comencé mi busqueda de una oportunidad laboral. Buscando, encontré Anunciate Ya! con la que conseguí el empleo que tanto buscaba en la industria del software.'}/> 
          </motion.div>
        </div>

        <div className='landing__content-4' id='sect-3'>
          <div className='landing__content-4-title'>
            <div className='title-container-news'>
              <h1>Novedades</h1>
            </div>
            <div className='title-image'></div>
          </div>
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