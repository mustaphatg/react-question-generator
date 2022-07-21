
import  React from "react"
import {  
  SimpleGrid, Skeleton, SkeletonText , Box
} from "@chakra-ui/react"




function Loading(){
    return (
        <Box h="100%" w="100%" p="20px" >
            <SimpleGrid my="15px" columns="4"  spacing="10px" >
                <Skeleton  height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
            </SimpleGrid >
            
            <SkeletonText noOfLines= { 10 } />
        </Box>
    )
}


export default Loading