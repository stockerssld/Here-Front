
import {Box, Table} from 'rbx'
import React,{memo,useState,useEffect} from 'react'
import Button2 from 'components/Util/Button'
import {Title,Column, Button, Icon} from 'rbx'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Divider} from 'antd'
import axios from 'axios'
export default  memo(function TableProducts(props){

    const [id, setId] = useState(0)
  const Delete=()=>{
    // e.preventDefault()
    // axios.delete("http://localhost:3002/categories/"+dato.id)
    // .then(res=>{
    // console.log(res.data) 
    // e.preventDefault() 
    // })
    // .catch(function(error){
    // if(error.response){
    //     console.log(error.response.data);
    //     // console.log(error.response.status);
    //     console.log(error.response.headers);
    // }
    // })
    console.log("Eliminado")
}

return(<>
<Table fullwidth>
  
  <Table.Head>
    <Table.Row>
    {/* {console.log(props.datos)} */}
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
      [[<div><img src={dato.img} style={{height:"8rem", width:"8rem"}}/><br/>{dato.name}  </div>],[ <Button2 id={dato.id}  className="button is-primary" text={'Modificar'}/>,' ',<Button2 id={dato.id} className="button is-danger" text={'Eliminar'} onClick={Delete}/>],   
    ],
      
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


























