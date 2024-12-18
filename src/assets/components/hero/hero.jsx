import React from 'react'
import './hero.css'
import imagenhero from '../../../../public/imagenhero.PNG'
/*import academico from '../../../../public/academico.pdf'*/

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub ,FaWhatsapp} from 'react-icons/fa';



export default function Hero() {
  const handleClick = () => {
    window.open('https://github.com/MatiasCavilla01', '_blank', 'noopener,noreferrer');
  };
  const headingFontSize = useBreakpointValue({ base: '4xl', md: '5xl', lg: '4xl' });
  const textFontSize = useBreakpointValue({ base: '4x1', md: '5x1', lg: 'xl' });
  // Determinar si se debe mostrar la imagen según el tamaño de pantalla
  const showImage = useBreakpointValue({ base: false, md: true });

  return (
    <Box p={6} bg="#24263b"  minH="80vh" display="flex" alignItems="center" justifyContent="center" color="white" fontSize={useBreakpointValue({ base: '23px', sm: '26px', md: '28px', lg: '20px', xl: '26px', xxl: '38px' })}>
      <Flex
        id="hero"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        gap={8}
      >
        {/* Sección de Texto */}
        <Box maxW="600px" textAlign={{ base: 'center', lg: 'left' }} >
          <Flex mb={4} justify={{ base: 'center', lg: 'flex-start' }} gap={3}>
            <Link href="https://wa.me/543544630650" isExternal>
              <IconButton icon={<FaWhatsapp />} aria-label="Twitter" colorScheme="twitter" />
            </Link>
            <Link href="https://www.instagram.com/matias.cavilla?igsh=N28wZm5kMGpoZW44" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" colorScheme="pink" />
            </Link>
            <Link href="https://www.linkedin.com/in/matias-cavilla-6960352b2" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" colorScheme="linkedin" />
            </Link>
          </Flex>

          <Heading as="h1" fontSize={headingFontSize} mb={4}>
            Soy Matias Cavilla
          </Heading>
          <Text color="#9ea0ad" fontSize={textFontSize} mb={2}>
            Soy Matías, estudiante y desarrollador web.
          </Text>
          <Text color="#9ea0ad" fontSize={textFontSize} mb={6}>
            Gracias por visitar mi portafolio.
          </Text>

          <Flex gap={4} justify={{ base: 'center', lg: 'flex-start' }}>
            <Link href="../../../../public/academico.pdf" _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal">Mi Académico</Button>
            </Link>
            <Button leftIcon={<FaGithub />} colorScheme="gray" onClick={handleClick}>
              GitHub
            </Button>
          </Flex>
        </Box>

        {/* Sección de Imagen */}
        {showImage && (
          <Box maxW="40%" maxH="40%">
            <Image
              src={imagenhero}
              alt="Imagen de Matías"
              /*borderRadius="full"*/
              /*boxSize={{ base: '200px', md: '300px', lg: '' }}*/
              width="100%"        // Ancho del 100% del contenedor padre
              height="auto"
              
              objectFit="contain"
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
}

/*export default function Hero() {
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
}*/