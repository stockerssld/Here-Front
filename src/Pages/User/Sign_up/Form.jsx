import { Form, Icon, Input, Button} from 'antd';
import React from 'react'
import axios from 'axios'
class Form_Sign_up extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    
    // this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      
    // const {
    //     email,
    //     password,
    //     password_confirmation
    // } =this.state

    axios
        // .post("https://cors-anywhere.herokuapp.com/http://192.168.0.103:3002/registrations", {
        // .post("http://localhost:3002/registrations", {
          
        .post("https://here-back.herokuapp.com/registrations", {

          user: {
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirmation
            }
        },
          { withCredentials:true}
        )
        .then(response =>{
            console.log(response.data.status)
            if(response.data.status === 'created'){
              this.props.handleSuccessfulAuth(response.data)
            }
        })
        // .catch(error=>{
        //     console.log("registration error"+ error)
        // })
        .catch(function(error){
          if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
        e.preventDefault()
      }
    });
    }


  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
          
        <Form onSubmit={this.handleSubmit} className="login-form">
          <hr/>
          <br/>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ type:'email', required: true, message: 'The input is not valid E-mail!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password_confirmation', {
              rules: [{ required: true, message: 'Las contraseñas deben se iguales' }],
            })(
          <Input.Password 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="input password" />,
              )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Registrar
            </Button>
          </Form.Item>
        </Form>
        
      );
    }
  }
const Sign_upF = Form.create({name: 'normal_login'})(Form_Sign_up)

export default Sign_upF