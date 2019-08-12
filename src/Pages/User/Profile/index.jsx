import React, { Component } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core';
import { Card } from 'zent';
import { Image, Column, Notification } from 'rbx'
import Typography from '@material-ui/core/Typography';
import thunk from 'redux-thunk';

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            last_name: "",
            cellphone: "",
            address: "",
            user: ""

        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:3002/profiles/1")
            .then(response => {
                
                // console.log(response.data)
                this.setState({
                    name: response.data.name,
                    last_name: response.data.last_name,
                    cellphone: response.data.cellphone,
                    address: response.data.address,
                    user: response.data.user_id
                })
                // console.log(response.data[1])

            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        const { name, last_name, address, cellphone, user } = this.state
        // console.log(this.props.users.id)
        this.state.user=this.props.users.id
        // console.log(this.props.users.id)
        // console.log(this.state.user)
        return (
            <Container>
              
                <Column.Group vcentered multiline>
                    <Column size="one-quarter">
                    <Card style={{ width: 'auto'}}>
                        <center>
                        <Image.Container size={128}>
                            <Image src="https://bulma.io/images/placeholders/256x256.png" />
                        </Image.Container>
                        </center>
                        </Card>
                    </Column>
                    <Column>
                    <Card style={{ width: 'auto', paddingLeft:"2rem", paddingRight:"2rem"}}>
                    <Typography variant="h4" component="h3">
                        <center>
                        Mi Perfil 
                        </center>
                        <hr/>
                    </Typography>  
                    <Typography variant="h6" component="h5">
                            {/* <b>Nombre: </b> {name} <br/>
                            <b>Apellidos: </b> {last_name} <br/>
                            <b>Dirección: </b> {address} <br/>
                            <b>Telefono: </b> {cellphone} <br/>*/}
                            <b>usuario: </b> {user} <br/>    
                    </Typography>
                    {/* {console.log(this.props)} */}
                    
                    </Card>
                    </Column>
                </Column.Group>
            </Container>
        )
    }
}

