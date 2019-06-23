import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Sign_upF from './Form';
import { Row, Col } from 'antd';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';



 class Sign_up extends Component {
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
        
        <>
        <br/>
        <Container>
        <Paper  style={{ padding:(3,2)}}>
        
        <div style={{paddingTop:'2%'}}>
        <Typography variant="h4" component="h3">
                    <center>
                     Registrate
                    </center>
        </Typography>    <br/>
            {/* eslint-disable-next-line */}
            <Row>
                <Col span={12} offset={6}>
                    <Sign_upF handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </Col>
            </Row>
            
        </div>
        </Paper>
        </Container>
        </>
    );
}
}

export default Sign_up