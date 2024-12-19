import React from 'react'
import './services.css'
import { Box } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'

export default function Services() {
  return (
    <Box fontSize={useBreakpointValue({base:"14px",sm:'15px',md:'20px',lg:'26px',xl:'31px',xxl:'36px'})}>
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
          <h3>API REST</h3>
          <p>Conocimientos en APIs REST, protocolo HTTP, Metodos, frameworks</p>
        </div>
        <div className="box">
          <i className="bi bi-gear-wide-connected"></i>
          <h3>Backend</h3>
          <p>Desarrollo backend de aplicaciones web con JavaScript y Java</p>
        </div>
        <div className="box">
          <i className="bi bi-window-fullscreen"></i>
          <h3>Frontend</h3>
          <p>Desarrollo Frontend de aplicaciones web con React</p>
        </div>
        <div className="box">
          <i className="bi bi-person-fill-gear"></i>
          <h3>Testing</h3>
          <p>Pruebas unitarias y Pruebas de Integracion </p>
        </div>
        <div className="box">
          <i className="bi bi-database"></i>
          <h3>Diseñador de Bases de Datos</h3>
          <p>Conocimientos en logica, normalizacion, definicion de Bases de datos relacionales </p>
        </div>
        <div className="box">
          <i className="bi bi-laptop"></i>
          <h3>Arquitecto de Software</h3>
          <p>Conocimientos en Arquitecturas monoliticas y  de microservicios</p>
        </div>
      </section>
    </section>
    </Box>

  )
}
