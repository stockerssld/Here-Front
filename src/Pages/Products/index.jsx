import React, { Component } from 'react'
import { Content, Column, Image } from 'rbx'
import TabsMenu from './tabs';
import Slider_Product from './Slider';
import { Container } from '@material-ui/core';
import { Input } from 'antd';

const Search = Input.Search;

class Products extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <br />
        <Container>

          <Column.Group breakpoint="mobile">
            <Column size="one-third">

              <Image.Container size={280}>
                <Column.Group breakpoint="mobile">
                  <Column size={2.5}>        
                    <Image src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/64317299_2070381379925556_8042930649557893120_n.png?_nc_cat=104&_nc_eui2=AeGIHCoQxg2upnxFv2xPt-ai-M_YnLVDXpZo-KNqOizRl4pqSkmHU0MJeXFhZtwOTQScDNJmd0akems_H8k8eJrKPSor-a9rHHyOXmxhtuWhRA&_nc_ht=scontent.fmex10-2.fna&oh=0a7c2c7bd43fba0a2244efcedfb2e0c3&oe=5D8CFE4B" alt="Imagen Logotipo" style={{ width: "80px", height: "60px" }} />
                  </Column>
                  <Column >
                  <Image src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/64324760_2566114173477411_8477176547835379712_n.png?_nc_cat=103&_nc_eui2=AeFTQ5K1K876ptfShTorRiz-0SLhf0AEKWEJ9EnRaLCiusKhQ6sTU1kjKlSUvsdIZM2aLL0BRUAd7_uXry2w9jcrLkkxuHD-OEicQ9TqqNV3ug&_nc_ht=scontent.fmex10-2.fna&oh=580f736d50b9351a93035cd959a5ec99&oe=5DC05713" alt="Imagen Logotipo" style={{ width: "300px", height: "60px" }} />
                  </Column>  
                </Column.Group>
              </Image.Container>
            </Column>
            <Column>
              <Search placeholder="Buscar" onSearch={value => console.log(value)} enterButton />
            </Column>
          </Column.Group>
        </Container>

        <Container fluid style={{ background: 'rgb(224, 217, 215)', 'padding-bottom': '1rem' }}>
          <Slider_Product />
        </Container>
        <br />
        <TabsMenu />
        {/* eslint-disable-next-line */}
      </div>
    )
  }
}

export default Products