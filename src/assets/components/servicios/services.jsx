import React from 'react'
import './services.css'
import { Box } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'

export default function Services() {
  return (
    <Box fontSize={useBreakpointValue({base:"10px",sm:'15px',md:'20px',lg:'26px',xl:'31px',xxl:'36px'})}>
    <section id="services" className="cont services">
      <h5 className="h5">SERVICIOS</h5>
      <h3 className="h3">Mi Servicios</h3>
      <p className="p">
        Estos son los servicios que puedo ofrecer con calidad
        <br />
        en base a mis conocimientos
      </p>
      <hr />
      <section className="contenedor-servicios">
        <div className="box">
          <i className="bi bi-globe"></i>
          <h3>Desarrollador web</h3>
          <p>Desarrollo de Páginas web de alta calidad</p>
        </div>
        <div className="box">
          <i className="bi bi-gear-wide-connected"></i>
          <h3>Desarrollador Backend</h3>
          <p>Desarrollo backend con Javascript y la librería express</p>
        </div>
        <div className="box">
          <i className="bi bi-window-fullscreen"></i>
          <h3>Desarrollador Frontend</h3>
          <p>Desarrollo Frontend con React</p>
        </div>
        <div className="box">
          <i className="bi bi-person-fill-gear"></i>
          <h3>Analista de Requerimientos</h3>
          <p>Análisis de Requerimientos de los clientes con las mejores Técnicas</p>
        </div>
        <div className="box">
          <i className="bi bi-database"></i>
          <h3>Desarrollador SQL</h3>
          <p>Desarrollo de Base de Datos con SQL</p>
        </div>
        <div className="box">
          <i className="bi bi-laptop"></i>
          <h3>Desarrollador Bash Script</h3>
          <p>Desarrollo de automatización de tareas y recursos del sistema con bash</p>
        </div>
      </section>
    </section>
    </Box>

  )
}
