
import React from 'react'
import {Card} from 'antd'
import Personas from './utils'
export default function List (){
  return(<>
  {
    console.log(Personas.Personas)
  }

{Personas.Personas.map((tipo, index) => {
  return (<Card>        {tipo.nombre}<br/>
  </Card>)
})} 
  </>)
}