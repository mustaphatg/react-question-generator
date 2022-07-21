import React from "react"
import "./question.css"
import {   Flex, useBreakpointValue }  from "@chakra-ui/react"
import Creatable from 'react-select/creatable'


const O = props => {
    
    const { a, b, c } = props.data
    
    const saveOption = props.saveOption
    
    const formatOption = props.formatOption
    
    // to show input option in row or column depending in the vuewport
    const optionInput = useBreakpointValue({
        base : { direction : "column", width : "60%" },
        md : { direction : "row", width : "25%" }
    })
    
    

    
    // to show formatted Optopts
    if(formatOption){
        return (
            <ol  style= {{  listStyleType : "none" }}  className="formatedOption">                                                                
                <li > a. &nbsp;{ a } </li>
                <li > b. &nbsp;{ b } </li>
                <li > c. &nbsp;{ c } </li>
            </ol>
        )
    }
    
    
    

   
    // show input to enter option
    return (
        <>
            <ol className="que">
                <Flex flexDirection={ optionInput.direction }  justify="space-between" spacingY="10" spacing="40px">
                    <li style= {{  width: optionInput.width }} > <Creatable defaultInputValue= { a }   options = { props.options }  onChange= { (va) => saveOption("a", va.value) }   placeholder="Option A" />  </li>
                    <li style= {{  width: optionInput.width  }} > <Creatable  defaultInputValue= { b }  options = { props.options }  onChange= { (va) => saveOption("b", va.value) }   placeholder="Option B" />  </li>
                    <li style= {{  width: optionInput.width }} > <Creatable defaultInputValue= {  c }   options = { props.options }  onChange= { (va) => saveOption("c", va.value) }   placeholder="Option C" />  </li>
                   
                </Flex>
            </ol>
        </>
    )
}



export default O