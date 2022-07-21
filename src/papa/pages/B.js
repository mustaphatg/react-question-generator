import React, { useContext, useRef } from "react"
import { aContext } from "./HomePage"


const App = props => {
    
    
    const value = useContext(aContext)
    const m = useRef()
    
    const change = () => {
        console.log(m)
        m.current.innerText = "Hello musty"
    }
    
    
    
    return (
        <div>
            <p
                style = {{   
                    border : "2px solid blue",
                    width : "80%",
                    margin : "auto"
                }}
            >
            
            <h1 ref= { m } > B component, { value.name} </h1>                                           
            
            <button onClick = { change } > change content </button>
                
            </p>
        </div>
    )
}



export default App