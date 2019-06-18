import React, { Component } from 'react'

import TabsMenu from './tabs';
import Slider_Product from './Slider';
class Products extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>
        
        <Slider_Product/>
      <br/>
      <TabsMenu />
      {/* eslint-disable-next-line */}
      </div>
    )
  }
}

export default Products