import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React,{Component} from 'react'
import axios from 'axios'
class Form_Sign_in extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: "",
        password: "",
        loginErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    
  axios
        // .post("http://localhost:3002/sessions", {
      .post("https://here-back.herokuapp.com/sessions", {
        user: {
              email: values.email,
              password: values.password,
              
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
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}

            <br/>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
        
      );
    }
  }
const Sign_inF = Form.create({name: 'normal_login'})(Form_Sign_in)

export default Sign_inF