import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Lista_Cuadricular from './Lista_cuadricular';
import TabsMenu from './tabs';
class Products extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>
        
      <TabsMenu/>
      {/* eslint-disable-next-line */}
      </div>
    )
  }
}

export default Products