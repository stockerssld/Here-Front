import React, { useState,useEffect,Component } from 'react';
import {Title,Column} from 'rbx'
import {Divider} from 'antd'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import TableProducts from 'components/Table/TableProducts';
import Table1 from 'components/Table';
import Button2 from 'components/Util/Button';
// export default function ProductosAdmin(props){
    
    
    //     function Eliminar(e){
    //     e.preventDefault()
    //     axios.delete("http://localhost:3002/categories/"+id)
    //     .then(res=>{
    //       console.log(res.data) 
    //       e.preventDefault() 
    //     })
    //     .catch(function(error){
    //       if(error.response){
    //         console.log(error.response.data);
    //         // console.log(error.response.status);
    //         console.log(error.response.headers);
    //       }
    //     })
    //     console.log("Delete")
    // //   }
    // const [name, setName]  = useState("")
    // const [description, setDescription]  = useState("")
    // const [price, setPrice] = useState(0)
    // const [img,setImg] = useState("")

    // function Post(){
    //         console.log(name)
    //         axios.post("http://localhost:3002/products",{
    //             name,
    //             description,
    //             price,
    //             img
    //         }).then(response=>{
    //             console.log(response)

    //         })
    // }
    

    // const [dato, setData] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:3002/products.json")
    //     .then(response=>{
    //         setData(response.data)
    //     })
    // }, []);

//     return(
        
//         <>
//         {props.children}
//         {/* {console.log(dato[0])} */}
//         <Column.Group>
//             <Column size="three-quarters">
//                 <Title as="p">Productos</Title>
//             </Column>
//             <Column>
//                 <Button2 DatosWithMethods={[Post, img]}className={'button is-success is-active'} text={'Agregar'} icon={faPlus} tipo={"products"} url={"/admin/products/new"}/>
//             </Column>           
//         </Column.Group>
//         <Divider/>
//         <Table1 header={['Productos']} datos={[...dato]} urlBase={"http://localhost:3002/products"}/>
//         </>
//     )
// }

// import React, { Component } from 'react'

    //   }
    // const [name, setName]  = useState("")
    // const [description, setDescription]  = useState("")
    // const [price, setPrice] = useState(0)
    // const [img,setImg] = useState("")

    // function Post(){
    //         console.log(name)
    //         axios.post("http://localhost:3002/products",{
    //             name,
    //             description,
    //             price,
    //             img
    //         }).then(response=>{
    //             console.log(response)

    //         })
    // }
    

   




