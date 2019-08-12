import React, { useState,useEffect, Component } from 'react';
import {Title,Column} from 'rbx'
import {Divider,Empty} from 'antd'
import axios from 'axios'
import Table1 from 'components/Table';
import Button2 from 'components/Util/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import lifecycle from 'react-pure-lifecycle';

 export default function Category(props){  
    const [isLoading, setIsLoading] = useState(false);
    const [dato, setData] = useState([]);
    const [name] = useState('');

    const getCategory=()=>{
        axios.get("http://localhost:3002/categories.json")
        .then(response=>{
            // console.log(response.data)
            // props.setAdd(response.data)
            setData(response.data)
        })
    }


    function Post() {
        axios.post("http://localhost:3002/categories",{
            name
          }).then(response=>{
            console.log(response)
            getCategory()
          })
      }
    useEffect(() => {
        // setIsLoading(true);
        getCategory()
  
        // axios.get("http://localhost:3002/categories.json")
        // .then(response=>{
        //     // console.log(response.data)
        //     setData(response.data)
        //     // setIsLoading(false);

        // })
    }, [dato]);


    return(
    <>
        <Column.Group>
        {props.children }

            <Column size="three-quarters">
                <Title as="p">Categorias</Title>
            </Column>
            <Column>
            <Button2   DatosWithMethods={[Post,name]}  className={'button is-success is-active'} text={"Agregar" } tipo={"category"} url={"/admin/category/new"} icon={faPlus}/>
            </Column>           
        </Column.Group>
        <Divider/>
        {isLoading ? (
        <Empty description={false} />
      ) : (
        <Table1 header={['Categorias']} datos={[...dato]} urlBase={"http://localhost:3002/categories"}/>

      )}
      
        </>
    )
    
}
