import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Layout from '../Layout'
import Products from '../Pages/Products';
import Sign_in from '../Pages/User/Sign_in';
import Sign_up from '../Pages/User/Sign_up';
import Chat from './../Pages/Chat'
import axios from 'axios'

function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          
          Pagina no encontrada <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }



export default class Routes extends Component{
  constructor(props){
    super(props)

    this.state={
      loggedInStatus: "NOT_LOGGED_IN",
      user:{}
    }
    
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)


    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    
  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data)
    this.props.history.push("/")
  }


  checkLoginStatus(){
        

    // axios.get("https://here-back.herokuapp.com/logged_in", { withCredentials: true })
    axios.get("http://localhost:3002/logged_in", { withCredentials: true })

    .then(response => {
      console.log("Logged in?", response)
      if(response.data.logged_in && this.state.loggedInStatus==="NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if(!response.data.logged_in && this.state.loggedInStatus==="LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }) .catch(function(error){
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  handleLogin(data){
    this.setState({
      loggedInStatus:"LOGGED_IN",
      user:data.user
    })
  }

    render(){
      return(
        <BrowserRouter>
        <Layout 
          
          handleLogin={this.handleLogin}
          loggedInStatus = {this.state.loggedInStatus}
          handleLogout={this.handleLogout}>
            <Switch>
                {/* <Route path={`${match.url}/:id`} component={Categories} /> */}
                {/* <Route path="/" exact component={Home}/> */}
                <Route  exact path={"/"} render={props=> ( <Products {...props}  handleLogin={this.handleLogin}         handleLogout={this.handleLogout}/>)}/>

                <Route
                path={"/users/Sign_in"}
                render={props=> (
                  
                    <Sign_in {...props} 
                      handleLogin={this.handleLogin}
                      handleSuccessfulAuth={this.handleSuccessfulAuth}
                      // handleLogout={this.handleLogout}
                      />
                  
  
                )}/>


                <Route
                  path={"/users/Sign_up"}
                  render={props=> (
                      <Sign_up {...props} 
                        handleLogin={this.handleLogin}
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        // handleLogout={this.handleLogout}
                        />
                  )}/>
                <Route
                path={"/Chat"}
                render={props=>(
                  <Chat {...props}/>
                )}
                  />
                <Route render={props=>(
                  
                    <NoMatch {...props}
                     loggedInStatus = {this.state.loggedInStatus}/>
                  
                )}/>
                 
            
            </Switch>
            </Layout>
        </BrowserRouter>
      )
    }
  }
  
  
