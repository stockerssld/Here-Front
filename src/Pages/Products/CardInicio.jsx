import React from 'react'
import { Card,  } from 'antd';
import Modals from './Modal'



const { Meta } = Card;
export default  function(props){
 
    return(
        <>
       <Modals {...props}>
          <Card
            hoverable       
            cover={<img style={{width:320,height:220}} src={props.img} />}
            >
            <Meta title={props.title} description={props.nombre_planta} />
          </Card>
        </Modals>
        </>
    )
}