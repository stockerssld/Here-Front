import React,{memo,useState} from 'react'
import {Field,Control,Input,Icon} from 'rbx'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default memo(function Input2(props){
return(<>

<Field>
  <Control iconLeft >
    <Input type=
    {props.type?props.type:"text"}
     placeholder={props.text}
     name={props.name}
     value={props.value}
     onChange={props.onChange}
      />
     
    <Icon size="small" align="left">
      <FontAwesomeIcon icon={props.icon?props.icon:null} />
    </Icon>
  </Control>
</Field>
</>)
})