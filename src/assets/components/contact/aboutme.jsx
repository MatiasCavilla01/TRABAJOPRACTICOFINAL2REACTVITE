import React, { Fragment } from 'react'
import Formulario from './form'
import {Box, Center} from '@chakra-ui/react'
import imagencontact from '../../../../public/imagencontact.PNG'
import { useBreakpointValue } from '@chakra-ui/react'

export default function Aboutme() {
  return(
    <Box backgroundColor='#1f2136' id='about' fontSize={useBreakpointValue({base:"10px",sm:'15px',md:'20px',lg:'26px',xl:'31px',xxl:'36px'})}>
        <section className='about-contact'>
          <div className='about '>
            <div className='cont cont-about'>
            <h3 className="h3">Acerca de mí</h3>
            <p className="p">Creo en la creación de soluciones tecnológicas<br></br>que no solo sean funcionales, sino también accesibles<br></br>y estéticamente agradables.</p>
                <p> Me apasiona aprender nuevas tecnologías y mejorar<br></br> continuamente mis habilidades.
                Si le gustaría<br></br> trabajar conmigo o tienes alguna pregunta,<br></br>no dudes en contactarme.</p>
            </div>
            </div>
            <Box as='div' id='contact' display='flex' justifyContent='space-evenly' marginTop='5%'>
              <Formulario ></Formulario>
              <img src={imagencontact} alt="" width='43%' height='14%' style={{display:useBreakpointValue({base:'none',sm:'none',md:'block',lg:'block',xl:'block',xxl:'block'}),}} />
            </Box>
               
            
        </section>
        </Box>
    

  )
}
