import React from 'react'
import { Card,Input,Button } from 'antd';
import Personas from './utils'

const { TextArea } = Input;
export default  function(props){
 
    return(
        <>
            <Card
                hoverable
                cover={
                <div style={{width:'100%',height:400}} 
            >
               

               {Personas.Personas.map((tipo, index) => {
                return (<>                   
                    <Textos/>
                </>)
                })} 
    

               <br/>
                </div>
            }
            >
            {/* <Input placeholder="input search text" onSend={value => console.log(value)} enterButton /> */}
            <TextArea rows={2} />
            <Button type="primary" block>Enviar</Button>
            </Card>
            {console.log(props)}
        </>
    )
}

function Textos(props){
    return(
        <div>
        {/* {console.log(props.Personas} */}
        </div>
    )
}