import React, { Component } from 'react'
import {Content}from 'rbx'
import TabsMenu from './tabs';
import Slider_Product from './Slider';
import { Container } from '@material-ui/core';
class Products extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>
        <br/  >
        <Container fluid style={{background:'rgb(224, 217, 215)'}}>
        <Slider_Product/>
        </Container>
      <br/>
      <TabsMenu />
      {/* eslint-disable-next-line */}
      </div>
    )
  }
}

export default Products