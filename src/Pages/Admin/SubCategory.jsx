import React, { useState,useEffect, Component } from 'react';
import {Title,Column} from 'rbx'
import {Divider,Empty} from 'antd'
import axios from 'axios'
import Table1 from 'components/Table';
import Button2 from 'components/Util/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons'


// import lifecycle from 'react-pure-lifecycle';
 export default function Category(props){  

    const [dato, setData] = useState([]);
    const [name] = useState('');
    function Post() {
        axios.post("http://localhost:3002/categories",{
            name
          }).then(response=>{
            console.log(response)
            
          })
      }
    useEffect(() => {
        axios.get("http://localhost:3002/categories.json")
        .then(response=>{
            // console.log(response.data)
            setData(response.data)
        })
    }, []);


    return(
    <>
        <Column.Group>
        {props.children }

            <Column size="three-quarters">
                <Title as="p">SubCategorias</Title>
            </Column>
            <Column>
            <Button2 DatosWithMethods={[Post,name]} className={'button is-success is-active'} text={"Agregar" } tipo={"subcategory"} url={"/admin/subcategory/new"} icon={faPlus}/>
            </Column>           
        </Column.Group>
        <Divider/>
        <Table1 header={['Subcategorias']} datos={[...dato]} urlBase={"http://localhost:3002/subcategory"}/>
        </>
    )
    
}



