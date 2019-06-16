import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Row, Col } from 'antd';
import Sign_inF from '../Sign_in/Form';



 class Sign_in extends Component {
    constructor(props){
        super(props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data)
        this.props.history.push("/")

    }
    
    render(){
        return (
            <div>
                <Typography variant="h5" component="h3">
                Iniciar Sesión
                </Typography>
                <br/>
                {/* eslint-disable-next-line */}
                <Row>
                    <Col span={12} offset={6}>
                        <Sign_inF
                         handleSuccessfulAuth={this.handleSuccessfulAuth}  />
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Sign_in