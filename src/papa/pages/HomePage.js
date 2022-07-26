import React  from "react"
import { Box, Button,  SimpleGrid, Center  } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const aContext = React.createContext()


const HomePage = props => {
    
    return (
        <Box w="100%" h="100vh" bg ="#2196F3" pt= { ["100px",  "15%" ] } >
            
            
            
            <Center w="65%" h= { ["40%", "50%", "70%"] }   my="auto" mx="auto" bg="rgba(0, 200, 255, 0.25)" borderRadius="10px"  >   
                
                    <SimpleGrid spacing="10" py="20"  p="15" colums= {["1", "2"  ]} >
                        <Button   as = {  Link } to="/surah/surah-fatiha"  > Question Generator </Button>
                        <Button as = {  Link } to="/"  > Match Making </Button>
                        <Button as = {  Link } to="/Word-Art"  > Word Art </Button>
                    </SimpleGrid>
                
            </Center>
            
            
            
        </Box >
    )
}



export default HomePage