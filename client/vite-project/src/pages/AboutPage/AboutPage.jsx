import React from 'react'
import AboutCard from '../../components/AboutCard/AboutCard'
import imgDani from '../../assets/img/about-us__card-dani.png'
import './AboutPage.css'

const AboutPage = (props) => {
  return (
    <div className='aboutPage__container'>
        <div className='aboutPage__title'>
            <div>
                <h1>Acerca de Nosotros</h1> 
            </div>
        </div>
        <div className='aboutPage__container-cards'>
            <div className='aboutPage__container-cards-grid'>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={imgDani}
                        title={'Dani'} 
                        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nulla aspernatur quos maiores totam, repellat non perferendis omnis et exercitationem consectetur recusandae alias necessitatibus nobis at corporis iste quaerat explicabo?'}
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={imgDani}
                        title={'Dani'}
                        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nulla aspernatur quos maiores totam, repellat non perferendis omnis et exercitationem consectetur recusandae alias necessitatibus nobis at corporis iste quaerat explicabo?'} 
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={imgDani}
                        title={'Dani'}
                        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nulla aspernatur quos maiores totam, repellat non perferendis omnis et exercitationem consectetur recusandae alias necessitatibus nobis at corporis iste quaerat explicabo?'} 
                    />
                </div>
                <div className='aboutPage__container-cards-box'>
                    <AboutCard
                        image={imgDani}
                        title={'Dani'}
                        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nulla aspernatur quos maiores totam, repellat non perferendis omnis et exercitationem consectetur recusandae alias necessitatibus nobis at corporis iste quaerat explicabo?'} 
                    />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutPage