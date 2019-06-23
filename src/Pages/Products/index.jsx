import React, { Component } from 'react'
import {  Column, Image } from 'rbx'
import TabsMenu from './tabs';
import Slider_Product from './Slider';
import { Container } from '@material-ui/core';
import { Input } from 'antd';
import Paper from '@material-ui/core/Paper';

const Search = Input.Search;

class Products extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <br />
        {/* <Container>

          <Column.Group breakpoint="mobile">
            <Column size="one-third">

              <Image.Container size={280}>
                <Column.Group breakpoint="mobile">
                  <Column size={10}>        
                    <Image src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/64782061_379499039338141_7469943980336087040_n.png?_nc_cat=107&_nc_ht=scontent.fmex10-2.fna&oh=2e0af3118bf26726b71a6bd1e1b8abac&oe=5D89F5C9" alt="Imagen Logotipo" style={{ width: "26s0px", height: "60px" }} />
                  </Column>  
                </Column.Group>
              </Image.Container>
            </Column>
            <Column>
              <Search placeholder="Buscar" onSearch={value => console.log(value)} enterButton style={{'paddingTop':'1rem'}}/>
            </Column>
          </Column.Group>
        </Container> */}

       
        {/* eslint-disable-next-line */}

        <Container>
        <Container fluid style={{ background: 'rgb(224, 217, 215)', 'padding-bottom': '1rem' }}>
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