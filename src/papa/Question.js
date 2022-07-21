import React, { useState } from "react"
import { Box }  from "@chakra-ui/react"
import Options  from "./Options"


import { getOptions  } from "./func/func"



const Q = props => {
    
    const question = props.qss
    
    
    const id = props.id
    
    const [data, setData] = useState({
        a : "",
        b : "",
        c : ""
    })
    
    
    console.log(props.marginBetweenQuestion)
    
    
    
    const formatOption = props.formatOption
    
    
    function saveOption(name, value){
        console.log(name, value)
        
        setData({
            ...data,
            [name] : value
        })
    }
    
    
    
    /*
        var 1 : translations
        var 2 : question number
    */
    const all_options = getOptions(props.translations, props.questionNumber)
    
    

    return (
        <Box border="1px solid #EEEEEE" my= { props.marginBetweenQuestion} boxShadow="md"  rounded="9"  p="20px">
            <p>
                <span> { id+"." } </span> 
                <b>{ question }</b>
            </p>
            
            <Options  options = { all_options }   saveOption = { saveOption } formatOption= { formatOption }   data={ data } />
            

        </Box>
    )
}



export default Q