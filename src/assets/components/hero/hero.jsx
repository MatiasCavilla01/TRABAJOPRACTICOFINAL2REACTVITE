import React from 'react'
import './hero.css'
import imagenhero from '../../../../public/imagenhero.PNG'
import academico from '../../../../public/academico.pdf'
import { useBreakpointValue } from '@chakra-ui/react'
import {Box ,Flex} from '@chakra-ui/react'

export default function Hero() {
    const handleclick = ()=>{
        window.open('https://github.com/MatiasCavilla01', '_blank', 'noopener,noreferrer')
    }

  return (
    <Box fontSize={useBreakpointValue({base:"23px",sm:'26px',md:'28px',lg:'20px',xl:'26px',xxl:'38px'})}>
    <section id="hero"  className="hero">
                <section className="contenedor">
                    <section className="texto-hero">
                    <section className="iconos-redes">
                        <a href="https://www.facebook.com/matias.cavilla.9/"><i className="bi bi-facebook ico"></i></a>
                        <a href="https://x.com/MatiasCavilla01?t=tFye6axRrKwX0mHj-JpAMQ&s=08"><i className="bi bi-twitter-x ico"></i></a>               
                        <a href="https://www.instagram.com/matias.cavilla?igsh=N28wZm5kMGpoZW44"><i className="bi bi-instagram ico"></i></a>
                        <a href="https://www.linkedin.com/in/matias-cavilla-6960352b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin ico"></i></a>
                    </section>
                    
                        <h1>Soy Matias Cavilla</h1>
                        <p>Soy Matías, estudiante y desarrollador web.</p>
                        <p>Gracias por visitar mi portafolio.</p>
                        <a href={academico}><button className="academico">Mi Academico</button></a>
                        <button onClick={handleclick}  className="github"><i className="bi bi-github"></i></button>
                            
                    </section>
                    <div className="image-container">
                        <img className="imgmia" src={imagenhero} alt="Imagen mia" style={{display:useBreakpointValue({base:'none',sm:'none',md:'none',lg:'block',xl:'block',xxl:'block'})}}/>       
                    </div>
                </section>
            </section>
            </Box>
  )
}