import React from 'react'
import cardImage from '../../assets/img/card_image.jpg'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='container__landing-page'>
      <div className='landing__content-1'>
        <div className='filter-content-1'>
          <div className='section-header'>
            <div>
              <a href="#sect-1">Sección 1</a>
            </div>
            <div>
              <a href="#sect-2">Sección 2</a>
            </div>
            <div>
              <a href="#sect-3">Novedades</a>
            </div>
          </div>
          <div className='landing__content-1-title'>
            <h1>Anunciate <span className='title-span'>Ya!</span></h1>
            <h3>Anunciate en la página Nº1 en busqueda laboral y prestación de servivicios</h3>
          </div>
          <div className='landing__content-login-register'>
              <p>Buscá tu empleo o brindá tu servicio ahora.</p>
              <div className='container__button'>
                <button 
                className='button__login-register'>
                Ingresar
                </button>
                <button 
                className='button__login-register'>
                Registrarse
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className='landing__content-2' id='sect-1'>
          <h1>Opiniones</h1>
          <div className='container__cards'>
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
          </div>
      </div>

      <div className='landing__content-3'>
        <div className='landing__content-3-first' id='sect-2'>
          <div className='landing__content-3-first-filter'>
            <div>
              <h2>Sample title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
              <button className='button-more-info'>
                + Info
              </button>
            </div>
          </div>
        </div>
        <div className='landing__content-3-second'>
          <div className='content-3-second-box1'>
            <div>
              <h2>Sample title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
            </div>
          </div>
          <div className='content-3-second-box2'>
            <div>
              <h2>Sample title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nam similique officia quidem sapiente culpa libero? Saepe quaerat, deleniti totam suscipit vel sint, quidem, alias quasi recusandae dolore libero aperiam?</p>
            </div>
          </div>
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

      <div className='landing__content-5'>
          <div>
            <h3>¿Aun no te decidís?</h3>
            <p>
              ¡Comenzá por registrarte para conseguir empleo o brindar tus servicios!
            </p>
            <button className='content-5-button'>
              Registrarse
            </button>
          </div>
      </div>
    </div>
  )
}

export default LandingPage