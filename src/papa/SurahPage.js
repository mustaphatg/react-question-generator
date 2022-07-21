import React, { useState, useEffect } from "react"
import {  
  Button , HStack,  OrderedList, ListItem,  Box, Tab, Tabs, TabList, TabPanels, TabPanel
} from "@chakra-ui/react"
import {  useParams } from "react-router-dom"
import {  getSurah } from "./func/api"
import  "./surah.css"
import Loading  from "./Loading"
import { generateQuestions , Export2Doc }  from "./func/func"

import Question from "./Question"


import { Scrollbars } from 'react-custom-scrollbars';
 
 

const App = props => {
    
    const { surah } = useParams()
    
    
    
   // const text_sura = surah.replace(/surah-/, " ")
    
    

    
    
    // loading
    const [isLoading, setIsLoading] = useState(true)
    
    
    // Transliteration
    const [transliterations, setTransliterations] = useState([])
    
    
    // Translation
    const [translations, setTranslations] = useState([])
    
    
    // questions
    const [questions, setQuestions] = useState([])
    
    
    const [arabic, setArabic] = useState("")
    
    
    const [formatOption, setFormatOption] = useState(0)
    
    const [ marginBetweenQuestion, setMarginBetweenQuestion ] = useState("10px")


    const setFormatOption2 = () => {
        setMarginBetweenQuestion("25px")
        setFormatOption(o => !o)
    }
    
    
    useEffect( () => {
        
        setIsLoading(true)
        
        getSurah(surah)
        .then(data => {
            
            setTransliterations(data.transliterations)
            
            setTranslations(data.translations)
            
            setArabic(data.arabic)
            
           // console.log(transliterations)
            
            //gerenate questions
                var ques = generateQuestions( data.transliterations )
                setQuestions(ques)
            // console.log(ques)
            
            
            // set is loading
                setIsLoading(false)
            
        })
        
    }, [surah])
    

    

    
    
    
    if(isLoading){
        return <Loading />
    }
    
    
    
    
    return (
        <>
            {/* <Box h="100%" w="100%" p="10px" bg="gray.200" className="item-box"  > */}
               
                <Tabs  w="100%">
                    <TabList>
                        <Tab>Transliteration</Tab>
                        <Tab>Arabic</Tab>
                        <Tab>Translation</Tab>
                        <Tab>Questions</Tab>
                    </TabList>
                    
                    

                    <TabPanels >
                    
                        <TabPanel  >
                            <Box  h="calc(100vh - 80px)"  className="item-box item dec"  >
                                <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                                    <OrderedList>
                                        { transliterations.map( (trans, index ) => <ListItem className="list" >  &nbsp;  { trans }   </ListItem>)  }       
                                    </OrderedList>
                                </Scrollbars>
                            </Box>
                        </TabPanel>
                        
                        
                        <TabPanel>
                            <Box  h="calc(100vh - 80px)"  pb="45px"  className="item-box item" >
                                 <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                                   <p dir="rtl"   className="item"  dangerouslySetInnerHTML={{__html : arabic }}>
                                   
                                   </p>
                                </Scrollbars>
                            </Box>
                        </TabPanel>
                        
                        
                        <TabPanel>
                            <Box  h="calc(100vh - 80px)"    className="item-box item dec" >
                               <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                                    <OrderedList>
                                        { translations.map( (trans, index )=> <ListItem className="list" >  &nbsp; { trans }   </ListItem>)  }
                                    </OrderedList>
                                </Scrollbars>
                            </Box>
                        </TabPanel>
                        
                        <TabPanel>
                             <Box  h="calc(100vh - 80px)"     className="item-box" > 
                                <Scrollbars  style= {{  width:"100%", height: "100%"  }}  >
                                    
                                    <HStack >
                                        <Button onClick= { () => Export2Doc("q7")  } > Download </Button>
                                        <Button onClick= { () => setFormatOption2()  } > Format </Button>
                                    </HStack >
                                    
                                    
                                    <Box id="q7" h="100%" w="100%" py="15px">
                                        { questions.map((qu, index) =>  <Question marginBetweenQuestion = { marginBetweenQuestion } translations = {  translations}  questionNumber = { index }   formatOption= { formatOption } qss ={  qu } key= { index } id={index+1} />   ) }
                                    </Box>
                                    
                                </Scrollbars >
                            </Box> 
                        </TabPanel>
                        
                    </TabPanels>
                    
                    
                </Tabs>
                
                
            {/* </Box> */}
        </>
    )
}



export default App