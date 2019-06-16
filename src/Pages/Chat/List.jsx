
import React from 'react'
import {Card} from 'antd'
import Personas from './utils'
import { Avatar } from 'antd';

export default function List (){
  return(<>
  {
    console.log(Personas.Personas)
  }

{Personas.Personas.map((tipo, index) => {
  return (<Card className="col-md-12 row" style={JSON.stringify(tipo.mensajes[index].visto)=="false"?  {background: "aliceblue"}:null}>
          <Avatar style={{padding:10}} shape="square" size={64} src={`${tipo.avatar}`} />
            {tipo.nombre}
          
<br/>

{
  tipo.mensajes.map((mensaje,index)=>{return(
    <>
    {JSON.stringify(tipo.mensajes[index].visto)=="false"?tipo.mensajes[index].mensaje:""}
    </>
  )})
}
  </Card>)
})} 
  </>)
}