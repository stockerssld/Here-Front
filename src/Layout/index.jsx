import React from 'react'
import Body from './Body';
import {withRouter} from 'react-router-dom'
import Header from './Header'

function Layout(props) {
    return(
        <div>
            <Header
                {...props}
            />    
            <Body ruta={props.match.path}>  
            
            {props.children}
            </Body>
        </div>
    )
};

export default withRouter(Layout)