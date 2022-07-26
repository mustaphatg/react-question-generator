import React, { useState, createContext  } from "react"
import Menu from "./Menu"
import Header from "./Header"
import SurahPage from "./SurahPage"
import HomePage from "./pages/HomePage"
import WordArt from "./wordArt"



import {  
    Box, Flex, useBreakpointValue
} from "@chakra-ui/react"
import {  Outlet,  Routes, Route} from "react-router-dom"



const screenContext = createContext()



function Layout(){
    
    const screen = useBreakpointValue( { base : "phone", md : "desktop" } )
   
   const [isOpen, setIsOpen] = useState(false)
   
   
    const openDrawer = () => setIsOpen(o => !o)
    const onCloseDrawer = () => setIsOpen(o => !o)
    
    
    return (
        <Box h="100%" >
            <Header openDrawer= { openDrawer }  />
            <Flex h="calc(100vh - 70px)" >
                <Menu onClose = { onCloseDrawer }  isOpen = { isOpen } screen = { screen } />
                <Outlet  />
            </Flex>
        </Box>
    )
}








const App = props => {
    
    return (
        <Routes>
            <Route path="/" element= { <HomePage /> }  />
            <Route path="/Word-Art" element= { <WordArt /> }  />
            <Route element= { <Layout />  }>
                <Route path="/surah/:surah" element= { <SurahPage  /> }  />          
            </Route>
        </Routes>
    )
}



export default App