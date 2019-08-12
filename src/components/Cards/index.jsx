import React, { memo, useState } from 'react'
import { Divider } from 'antd'
import { Box, Card, Tag, Title, Image } from 'rbx'
import { Typography } from 'antd';
import { Link } from 'react-router-dom'
import Drawers from '../Drawer';
const { Paragraph } = Typography;

export default memo(function Card(props) {
    return (
        <center>
            <Box style={{ width: "22rem" }}>
                {/* <Link to={`/?Producto=${props.title}/-&=${props.nombre_planta}`}> */}
                <Card>
                    <Card.Image>
                        <Image.Container style={{ width: "auto" }}>
                        <div class="othercontainer">
                        <Image src={props.img} style={{ width: "20rem", height: "15rem" }} />
                        <div class="overlay">
                        <b>$ {props.price}</b>
                            </div>
                        </div> 
                        </Image.Container>
                    </Card.Image>
                </Card>
               
                <Divider />
                <Title size={4}>{props.name}</Title>
                <Paragraph ellipsis>
                    {props.description}
                </Paragraph>
                <Drawers {...props} />
                {/* </Link>       */}
            </Box>
        </center>
    )
}) 