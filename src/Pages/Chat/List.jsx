
import React from 'react'
import { Card } from 'antd'
import Personas from './utils'
import { Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default function List(props) {
  
  return (<>
   
    {Personas.Personas.map((tipo, index) => {

      return (
        
        <Link to={`${props.match.url}/${index}`}>

      <Card  key={index} className="col-md-12 row" style={JSON.stringify(tipo.mensajes[index].visto) == "false" ? { background: "aliceblue" } : null}>
        <Avatar style={{ padding: 10 }} shape="square" size={64} src={`${tipo.avatar}`} />
        {tipo.nombre}
 {/* {console.log(props)} */}
        <br />

        {
          tipo.mensajes.map((mensaje, index) => {
            return (
              <>
                {JSON.stringify(tipo.mensajes[index].visto) == "false" ? tipo.mensajes[index].mensaje : ""}
              </>
            )
          })
        }
      </Card>
      
      </Link>
      )
    })}
  </>)
}



