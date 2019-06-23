import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Layout from '../Layout'
import Products from '../Pages/Products';
import Sign_in from '../Pages/User/Sign_in';
import Sign_up from '../Pages/User/Sign_up';
import Chat from './../Pages/Chat'
import axios from 'axios'
import Seguimiento_Product from './../Pages/Seguimiento_Products'
import Profile from './../Pages/User/Profile'
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
      user:{},
      name: "",
      last_name: "",
      cellphone: "",
      address: "",
      user_id:""
    }
    
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)


    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.checkDAta = this.checkDAta.bind(this)
  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data)
    this.props.history.push("/")
  }


  checkLoginStatus(){
      
    axios.get("http://localhost:3002/logged_in", { withCredentials: true })

    // axios.get("https://here-back.herokuapp.com/logged_in", { withCredentials: true })
    .then(response => {
      console.log("Logged in?", response)
      // console.log(response.data.user.id)
      if(response.data.logged_in && this.state.loggedInStatus==="NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if(!response.data.logged_in & this.state.loggedInStatus==="LOGGED_IN"){
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
    this.checkDAta()
  }

  checkDAta(){
    
    axios.get(`http://localhost:3002/profiles/2`)
    
    .then(response => {
        
        // console.log(response.data)
        this.setState({
            name: response.data.name,
            last_name: response.data.last_name,
            cellphone: response.data.cellphone,
            address: response.data.address,
            user_id: response.data.user_id
        })
        // console.log(response.data[1])

    }).catch(error => {
        console.log(error)
    })
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
        {console.log(this.state.user_id)}
      // {console.log(this.state.user.id)}

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
                {/* <Route path={`${match.url}/:id`} 
                render={props=>(
                  <Products {...props}  handleLogin={this.handleLogin}         handleLogout={this.handleLogout}/>
                )}
                /> */}
                <Route
                path={"/users/Sign_in"}
                render={props=> (
                  // eslint-disable-next-line
                    <Sign_in {...props} 
                      handleLogin={this.handleLogin}
                      handleSuccessfulAuth={this.handleSuccessfulAuth}
                      // handleLogout={this.handleLogout}
                      />
                  
  
                )}/>


                <Route
                  path={"/users/Sign_up"}
                  render={props=> (
                    // eslint-disable-next-line
                      <Sign_up {...props} 
                        handleLogin={this.handleLogin}
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        // handleLogout={this.handleLogout}
                        />
                  )}/>
                <Route
                  path={"/Profile"}
                  render={props=>(
                    <Profile users= {this.state.user}/>
                  )}
                />
                <Route
                  path={"/Chat"}
                  render={props=>(
                    <Chat {...props}/>
                  )}
                />
                <Route
                  path={"/Payment_types"}
                  render={ props=>(
                    // eslint-disable-next-line
                    <Seguimiento_Product {...props}
                    handleLogout={this.handleLogout}/>
                  )

                  }
                />

                <Route render={props=>(
                  // eslint-disable-next-line
                    <NoMatch {...props}
                     loggedInStatus = {this.state.loggedInStatus}/>
                  
                )}/>
                 
            
            </Switch>
            </Layout>
        </BrowserRouter>
      )
    }
  }
  
  
