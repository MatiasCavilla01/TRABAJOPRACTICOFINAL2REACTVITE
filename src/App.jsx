import Header from "./assets/components/header/header"
import Hero from "./assets/components/hero/hero"
import Services from "./assets/components/servicios/services"
import Skills from "./assets/components/skills/skills"
import Aboutme from "./assets/components/contact/aboutme"
import { ChakraProvider,Box } from "@chakra-ui/react"


const  App = ()=>{ 

  return (
    <ChakraProvider>
    <Box> 
      <Header/>
      <Hero/>
      <Services/>
      <Skills/>
      
      <Aboutme/>
      
    </Box>
    
    
    </ChakraProvider>
    
    
  )
}

export default App
