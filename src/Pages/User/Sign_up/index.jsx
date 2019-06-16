import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Sign_upF from './Form';
import { Row, Col } from 'antd';
import axios from 'axios'
import { withStyles } from '@material-ui/styles';



//   const classes = useStyles();


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
        
        <div style={{paddingTop:'2%'}}>
        {/* <Paper className={classes.root} style={{'background-color':'#efefed'}}> */}
            <Typography variant="h5" component="h3">
            Registrate
            </Typography>
            <br/>
            {/* eslint-disable-next-line */}
            <Row>
                <Col span={12} offset={6}>
                    <Sign_upF handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </Col>
            </Row>
            
        {/* </Paper> */}
        </div>
    );
}
}

export default Sign_up