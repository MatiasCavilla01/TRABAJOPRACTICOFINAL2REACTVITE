import css from '../../../../public/css.png'
import js from '../../../../public/js.png'
import nodejs from '../../../../public/nodejs.png'
import sql from '../../../../public/sql.png'
import react from '../../../../public/react.png'
import html from '../../../../public/html.png'
import git from '../../../../public/git.png'
import github from '../../../../public/github.png'
import './skills.css'
import { useBreakpointValue } from '@chakra-ui/react'
import {Box } from '@chakra-ui/react'

export default function Skills() {
  return (
    <Box fontSize={useBreakpointValue({base:"10px",sm:'15px',md:'20px',lg:'26px',xl:'31px',xxl:'36px'})}>
    <section id="skills" className="cont skills">
      <h5 className="h5">SKILLS</h5>
      <h3 className="h3">Mis habilidades</h3>
      <p className="p">
        Estas son mis habilidades aprendidas a través de los años de la carrera
      </p>
      <hr />
      <section className="contenedor-skills">
        <div className="cajas">
          <img src={js} alt="Imagen de icono JS" />
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="cajas">
          <img src={nodejs} alt="Imagen de icono Node JS" />
          <h3>NODE JS</h3>
        </div>
        <div className="cajas">
          <img src={sql} alt="Imagen de icono SQL Server" />
          <h3>SQL SERVER</h3>
        </div>
        <div className="cajas">
          <img src={css} alt="Imagen de icono CSS" />
          <h3>CSS</h3>
        </div>
        <div className="cajas">
          <img src={react} alt="Imagen de icono React" />
          <h3>REACT</h3>
        </div>
        <div className="cajas">
          <img src={html} alt="Imagen de icono HTML" />
          <h3>HTML</h3>
        </div>
        <div className="cajas">
          <img src={git} alt="Imagen de icono GIT" />
          <h3>GIT</h3>
        </div>
        <div className="cajas">
          <img src={github} alt="Imagen de icono GIT HUB" />
          <h3>GIT HUB</h3>
        </div>
      </section>
    </section>
    </Box>

  )
}
