import React,{Fragment} from 'react'
import styled from 'styled-components'
// eslint-disable-next-line 
const Contenido=styled.div
`padding-top:0px;
background: #FFF;
`


export default function Body(props){
    return (
<Fragment>
<Contenido>
    {/* {console.log(props.children)} */}
{props.children}

</Contenido>
</Fragment>

    )
}