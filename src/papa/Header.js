import React from "react"
import {  
    Box, Heading, Button, Flex
} from "@chakra-ui/react"


const Header = props => {
    
    return (
        <Flex p="10px" boxShadow="md" justify="space-between" align="center" >
            <Heading  size="md" as="h3" color="#64B5F6" > Question Generator </Heading>
            <Button onClick = { props.openDrawer } colorScheme = "teal" > menu </Button>
        </Flex>
    )
}



export default Header