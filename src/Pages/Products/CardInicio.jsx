import React from 'react'
import { Card,  } from 'antd';
import Modals from './Modal'

import {Link,withRouter} from 'react-router-dom'


const { Meta } = Card;
export default  function(props){
 
    return(
        <>
        {/* <Link to={`/?Producto=${props.title}/-&=${props.nombre_planta}`}> */}
       <Modals {...props}>
          <Card
            hoverable       
            cover={<img style={{width:320,height:220}} src={props.img} />}
            >
            <Meta title={props.title} description={props.nombre_planta} />
          </Card>
        </Modals>
        {/* </Link> */}
        </>
    )
}