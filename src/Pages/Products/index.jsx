import React, { Component } from 'react'
import TabsMenu from './tabs';
import Slider_Product from './Slider';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

class Products extends Component {

  render() {
    return (
      <div>
        <br />
       
        <Container>
        <Container fluid style={{ background: 'rgb(224, 217, 215)', 'padding-bottom': '1rem' }}>
        {/* eslint-disable-next-line */}
        <Slider_Product />
        </Container>
        <br />
        <Paper style={{  padding:(3, 4)}}>
        <TabsMenu />
        </Paper>
        </Container>
      </div>
    )
  }
}

export default Products