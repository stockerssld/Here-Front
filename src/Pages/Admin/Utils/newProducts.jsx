
// import React, { useState, memo,Component } from "react";
import { Container } from "rbx";
import Input2 from "components/Util/Input";
import Modal2 from "components/Util/Modal";
import axios from 'axios'
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import React, { Component } from 'react'
import {success} from "../../../components/Message";
import {Form,Button} from 'antd'

export default class NewProducts extends Component {


  render(props) {
    console.log(props)
    return (
      <Container style={{ padding: 20 }}>
        <Form onSubmit={this.onSubmitHandler}>
         <Modal2 title="Agregar nuevos Productos" urlReturn="/admin/products">
          {/* <Input2 text={"Nombre de categoria"} type="text" icon={faEnvelope}  name="name" value={this.state.name} onChange={this.onChangeHandler}/> */}
          <Button type="primary" onClick={this.onSubmitHandler}>Agregar</Button>  
        </Modal2>
        </Form>
        </Container>
    )
  }
}