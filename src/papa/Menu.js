import React, { useState , useEffect} from "react"
import {  
    Box, Button
} from "@chakra-ui/react"

import { allSurah }  from "./func/api"
import  { Link } from "react-router-dom"
import  "./menu.css"
import { Scrollbars } from 'react-custom-scrollbars';
 
 
 import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
 

const Menu = props => {
    
    const [surahs, setSurahs] = useState([])
    
    
    
    useEffect(() => {
        
        allSurah().
        then(data => {
            //console.log(data)
            var d = JSON.parse(data)
            setSurahs(d)
        })
        
    }, [])
    
    
    if(props.screen === "phone"){
        
    
    // phone
    return (
        <Drawer
            isOpen ={ props.isOpen }
            placement = "left"
            onClose = { props.onClose }
        >
        
            <DrawerOverlay />
            
            <DrawerContent >
                <DrawerCloseButton />
                
                <DrawerHeader > Surahs </DrawerHeader>
                
                <DrawerBody>
                     {/* <Box h="100%" w="100%" borderRight="1px solid #EEEEEE"> */}
                        <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                            <ul className="menu-list" >
                                {  surahs.map((surah, i) => <Button key= { i } to={"/surah/"+surah.link }  as={ Link  } variant="link" > &nbsp; &nbsp; { surah.text } </Button> )  }                 
                            </ul>
                        </Scrollbars>
                    {/* </Box> */}
                </DrawerBody>
                
            </DrawerContent >
            

        </Drawer>
    )
    
    }
    
    
    
    
    //desktop 
    return (
        <Box h="100%" w="35%" borderRight="1px solid #EEEEEE">
            <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                <ul className="menu-list" >
                    {  surahs.map((surah, i) => <Button key= { i } to={"/surah/"+surah.link }  as={ Link  } variant="link" > &nbsp; &nbsp; { surah.text } </Button> )  }                 
                </ul>
            </Scrollbars>
        </Box>
    )
    
    
    
}



export default Menu