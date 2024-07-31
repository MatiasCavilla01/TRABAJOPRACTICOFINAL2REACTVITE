import './header.css'
import {Box,Button} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export default function Header() {


  return (
    <header>
            <Box>
              <nav className='navbar'>
                <Box  marginLeft='10%'  display={useBreakpointValue({base:'none',sm:'none',md:'flex',lg:'flex',xl:'flex',xxl:'flex'})} >
                <div id="Title">mat<span>.</span>ca</div>
                  <a href="#hero">Inicio</a>
                  <a href="#services">Servicios</a>
                  <a href="#about">Acerca De Mi</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contacto</a>
                </Box>
                <Box display={useBreakpointValue({base:'flex',sm:'flex',md:'none',lg:'none',xl:'none',xxl:'none'})}>
                     <Menu >
                      {({ isOpen }) => (
                        <>
                    <MenuButton justifyContent='center' backgroundColor='#1f2136' isActive={isOpen} as={Button}>
                      {isOpen ? 'Cerrar' :   <i className="bi bi-list icon"></i>}
                    </MenuButton>
                    <MenuList   backgroundColor='#1f2136'>
                      <MenuItem  backgroundColor='#1f2136'><a href="#hero">Inicio</a></MenuItem>
                      <MenuItem  backgroundColor='#1f2136'><a href="#services">Servicios</a></MenuItem>
                      <MenuItem  backgroundColor='#1f2136'><a href="#skills">Skills</a></MenuItem>
                      <MenuItem  backgroundColor='#1f2136'> <a href="#about">Acerca De Mi</a></MenuItem>
                      <MenuItem  backgroundColor='#1f2136'><a href="#contact">Contacto</a></MenuItem>
                    </MenuList>
                      </>
                    )}
                  </Menu>
                  
                </Box>

              </nav>
            </Box>
        
    </header> 
  )
}
