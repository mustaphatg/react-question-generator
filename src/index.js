import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import App from "./papa/App"




const root = document.querySelector("#root")



ReactDOM.render(
     <BrowserRouter >
          <ChakraProvider>
               <App />
          </ChakraProvider>
     </BrowserRouter>,
     root
)