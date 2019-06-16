
import React from 'react'
import Personas from './utils'
export default function List (){
  return(<>
  {
    console.log(Personas.Personas)
  }

{Personas.Personas.map((tipo, index) => {
  return (<>        Hola
  </>)
})} 
  </>)
}