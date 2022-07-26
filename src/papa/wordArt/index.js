import React from "react"
import "./word-art.css"
//import { Link } from "react-router-dom"
import { Scrollbars } from 'react-custom-scrollbars';
 


import { 
    Box , Heading , Button, HStack, Input
} 
    from "@chakra-ui/react"






const WordArt = props => {
    
    return (
        <Box w="100%" bg="#E0E0E0" mb="50px" >
        
            <Box bg="#4FC3F7" p="15px" mb="20px" >
                <Heading color="#E1F5FE" as="h1" size="md" >Word Art</Heading > 
            </Box>
            
            
            <Box  minHeight="700px" w = {["100%", "100%", "65%"]}  mx="auto" >
                
                <Box mb="15px" > 
                    <Button > Print  </Button>
                </Box>
                
                
                <Box h="400px" border="1.5px solid #BDBDBD" bg="white" boxShadow="sm"  w="100%" >                                                      
                    
                    <Input size="lg" mt="15%" />
                
                </Box>
                
            </Box>
            
        </Box>
    )
    
}



export default WordArt