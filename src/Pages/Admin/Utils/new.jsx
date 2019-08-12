
import React, { useState, memo,Component } from "react";
import { Container } from "rbx";
import Input2 from "components/Util/Input";
import Modal2 from "components/Util/Modal";
import axios from 'axios'
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import {success} from "../../../components/Message";
import { Notify } from 'zent';

import {Form,Button} from 'antd'


export default memo(function New(Add){
     

  const [name, setName] = useState('') 

  const onSubmitHandler =(e)=>{
    // e.preventDefault()
    // axios.post("http://localhost:3002/categories",{
    //   name
    // }).then(response=>{
    //   // console.log(success)
    //   Notify.success('Se creo su categoria')
    //   setName('')
    //   e.preventDefault();
    // })
    // e.preventDefault()  
    
  }

  const onChangeHandler=(e)=>{
    setName(e.target.value)
  }
  
  return(
    <>
       <Container style={{ padding: 20 }}>
        <Form onSubmit={onSubmitHandler}>
         <Modal2 title="Agregar nuevas categorias" urlReturn="/admin/category">
          <Input2 text={"Nombre de categoria"} type="text"  name="name" value={name} onChange={onChangeHandler}/>
          <Button type="primary" onClick={onSubmitHandler}>Agregar</Button>  
        </Modal2>
        </Form>
        </Container>
    </>
  )
})
// export  class New extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       name:'',
//     }

//     this.onChangeHandler = this.onChangeHandler.bind(this)
//     this.onSubmitHandler = this.onSubmitHandler.bind(this)
//   }

//   onChangeHandler(e){
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmitHandler(e){
//     axios.post("http://localhost:3002/categories",{
//       name: this.state.name
//     }).then(response=>{
//       console.log(response)
//       e.preventDefault();
//     })
    
    
//     // console.log(this.state.name)
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <Container style={{ padding: 20 }}>
//         <Form onSubmit={this.onSubmitHandler}>
//          <Modal2 title="Agregar nuevas categorias" urlReturn="/admin/category">
//           <Input2 text={"Nombre de categoria"} type="text" icon={faEnvelope}  name="name" value={this.state.name} onChange={this.onChangeHandler}/>
//           <Button type="primary" onClick={this.onSubmitHandler}>Agregar</Button>  
//         </Modal2>
//         </Form>
//         </Container>
//     )
//   }
// }