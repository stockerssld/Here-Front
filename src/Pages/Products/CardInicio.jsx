import React from 'react'
import { Card, Button } from 'antd';
import Modals from './Modal'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const { Meta } = Card;
export default  function(props){
 
    return(
        <>
       <Modals {...props}>
         <Card
    hoverable
    
    cover={<img style={{width:320,height:220}} src={props.img} />}
  >
    <Meta title={props.title} description={props.author} />
  </Card>
  
      


        </Modals>
        </>
    )
}