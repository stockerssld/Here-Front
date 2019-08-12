
import {Box, Table} from 'rbx'
import React,{memo,useState,useEffect} from 'react'
import Button2 from 'components/Util/Button'
import {Title,Column, Button, Icon} from 'rbx'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Divider} from 'antd'



export default  memo(function Table1(props){
  // {console.log(props)}
    
return(<>
<Table fullwidth>
  <Table.Head>
    <Table.Row>
    
    {props.header.map(dato=>{return(
      <Table.Heading>{dato}</Table.Heading>
    )})}
      <Table.Heading>Opciones</Table.Heading>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {props.datos.map(dato=>{
        return(
            <>
             {[
      // [dato.name],
      [dato.name, [<Button2 id={dato.id}  className="button is-primary" text={'Modificar'}/>,' ',<Button2 id={dato.id} className="button is-danger" text={'Eliminar'} urlBase={props.urlBase}/>]],
      
    ].map(([v1, v2], i) => (
      <Table.Row key={i}>
        <Table.Cell>{v1}</Table.Cell>
        <Table.Cell>{v2}</Table.Cell>
      </Table.Row>
    ))}   
            </>
        )
    })}
    
  </Table.Body>
</Table>
</>)
})


























