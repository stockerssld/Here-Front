import React, { memo, useState } from "react";
import { Button, Icon } from "rbx";
import Modal2 from 'components/Util/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import {Link} from 'react-router-dom'
import New from 'Pages/Admin/Utils/new'
 
export default memo(function Button2({ className, icon, text,title,status, id, tipo, url, props, DatosWithMethods,urlBase  }) {
  
  const Eliminar=(e)=>{
    e.preventDefault()
    axios.delete(urlBase+"/"+id)
    .then(res=>{
      console.log(res.data) 
      e.preventDefault() 
    })
    .catch(function(error){
      if(error.response){
        // console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })


  }
  const Modificar=()=>{
    
    // console.log("Modificar")
  }
  const Agregara=()=>{
    console.log("Agregar")
    // metodo()
  }

   function Agregar(){
    return(
    <div>JOSE<br/><br/><br/><br/><br/><br/><br/><br/><br/>JOSE</div>
  
    )
  }
  
  // console.log(metodo)

  return (
    <>
    <Link to={url} >
      
      <Button className={className} onClick={text==="Eliminar"?Eliminar:text==="Modificar"?Modificar:Agregar}>
      {/* {    console.log(DatosWithMethods)} */}
      {/* {JSON.stringify(metodo)} */}

      {/* <Button className={className} > */}

        {icon ? (
          <Icon size="small">
            <FontAwesomeIcon icon={icon} />
          </Icon>
        ) : null}
        {/* {{title,status}?<Modal2 Datos={{title,status}} ></Modal2>:<Modal2></Modal2>} */}
        <span>{text}</span>
      </Button>
      </Link>
    </>
  );
});