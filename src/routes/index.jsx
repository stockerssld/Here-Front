import React, { Component, useState,useEffect } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Layout from '../Layout'
import Products from '../Pages/Products';
import Sign_in from '../Pages/User/Sign_in';
import Sign_up from '../Pages/User/Sign_up';
import Chat from './../Pages/Chat'
import axios from 'axios'
import Seguimiento_Product from './../Pages/Seguimiento_Products'
import Profile from './../Pages/User/Profile'
import Admin from 'Pages/Admin/index'
import Orders from 'Pages/Admin/Orders'
import Returns from 'Pages/Admin/Returns'
// import {ProductosAdmin} from 'Pages/Admin/Products'
import Promotions from 'Pages/Admin/Promotions'
import Users from 'Pages/Admin/Users'
import Configurations from 'Pages/Admin/Configurations'
import Category from 'Pages/Admin/Category';
import New from 'Pages/Admin/Utils/new'
import Subategory from 'Pages/Admin/SubCategory';
import Seguimiento_Products from './../Pages/Seguimiento_Products';
// import ProductosAdmin from '../Pages/Admin/Products';

function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          
          Pagina no encontrada <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }



export default function Routes(props){
  

const [user, SetUser] = useState({})
  const [loggedInStatus, SetloggedInStatus] = useState("NOT_LOGGED_IN")

  function handleSuccessfulAuth(data) {
    handleLogin(data)
    props.history.push("/")
  }
  function checkLoginStatus() {

    axios.get("http://localhost:3002/logged_in", { withCredentials: true })
      .then(response => {
        console.log("Resputesta=>", response)  
        console.log(response.data.logged_in)
        console.log(loggedInStatus)
        console.log(response.data.logged_in && loggedInStatus)
        console.log(!response.data.logged_in & loggedInStatus )
        // console.log("Logged in?", response) 
        
          
        // const[Datos,setDatos]=useLocalStorage({loggedInStatus:''})   
          // response.data.user.id?setDatos({...Datos,loggedInStatus:response.data.user.id}):setDatos('')
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          SetloggedInStatus("LOGGED_IN")
          SetUser(response.data.user)

        } else if (!response.data.logged_in & loggedInStatus === "LOGGED_IN") {

          SetloggedInStatus("NOT_LOGGED_IN")
          SetUser({})
        }
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
  }

  useEffect(() => {
    

  }, )
  

  function handleLogout() {
    SetloggedInStatus("NOT_LOGGED_IN")
    SetUser({})
  }

  function handleLogin(data) {
    SetloggedInStatus("LOGGED_IN")
    SetUser(data.user)
  }


  return (
    <BrowserRouter>

      <Layout
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedInStatus={loggedInStatus}
      >
        <Switch>
          
          <Route path={"/admin/orders"} render={props => (<Admin><Orders /></Admin>)} />
          <Route path={"/admin/return"} render={props => (<Admin><Returns /></Admin>)} />
          <Route path={"/admin/category/new"} render={props => (<Admin><Category><New /> </Category></Admin>)} />
          <Route path={"/admin/category"} render={props => (<Admin><Category /></Admin>)} />
          <Route path={"/admin/subcategory"} render={props => (<Admin><Subategory /></Admin>)} />


          {/* <Route path={"/admin/products"} render={props => (<Admin><ProductosAdmin /></Admin>)} /> */}

          <Route path={"/admin/promotions"} render={props => (<Admin><Promotions /></Admin>)} />
          <Route path={"/admin/users"} render={props => (<Admin><Users /></Admin>)} />
          <Route path={"/admin/configurations"} render={props => (<Admin><Configurations /></Admin>)} />
          <Route path={"/admin"} render={props => (<Admin>Bienvenido al Panel</Admin>)} />
{/* 
          <Route path="/users/sign_in" render={props => (<Login   {...props} />)} />
          <Route path="/users/sign_up" render={props => (<Register handleSuccessfulAuth={handleSuccessfulAuth} />)} />
          <Route path="/users/sign_up/Continue" render={props => (<Continue />)} /> */}
          <Route path="/users/profile" render={props => (<Profile />)} />
          {/* <Route path="/About" render={props => (<About />)} /> */}
          {/* <Route path=`{/?Producto=${props.title}/-&=${props.nombre_planta}` render={props=>(<Login/>)}/>    */}
          {/* <Route path="Products/asd" render={props=>(<div>go</div>)}/>  */}
          {/* "/?Producto=${props.title}/-&=${props.nombre_planta"  */}
          <Route path="/Payment_types" render={props => (<Seguimiento_Products/>)} />


          <Route render={props => (
            // eslint-disable-next-line
            <NoMatch {...props}
            />

          )} />



        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

  // export  class Routes extends Component{
  // constructor(props){
  //   super(props)

  //   this.state={
  //     Add:"is Add initial",
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user:{}
  //   }
    
  //   this.handleLogin = this.handleLogin.bind(this)
  //   this.handleLogout = this.handleLogout.bind(this)


  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    
  // }

  // handleSuccessfulAuth(data){
  //   this.props.handleLogin(data)
  //   this.props.history.push("/")
  // }


  // checkLoginStatus(){
  //   axios.get("http://localhost:3002/logged_in", { withCredentials: true })
  //     .then(response => {
  //     if(response.data.logged_in&& this.state.loggedInStatus==="NOT_LOGGED_IN"){
  //       this.setState({
  //         loggedInStatus: "LOGGED_IN",
  //         user: response.data.user
  //       })
  //     } else if(!response.data.logged_in & this.state.loggedInStatus==="LOGGED_IN"){
  //       this.setState({
  //         loggedInStatus: "NOT_LOGGED_IN",
  //         user: {}
  //       })
  //     }
  //   }).catch(function(error){
  //     if(error.response){
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  //   })
  // }

  // componentDidMount(){
  //   this.checkLoginStatus()
  // }

  // handleLogout(){
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   })
  // }

  // handleLogin(data){
  //   this.setState({
  //     loggedInStatus:"LOGGED_IN",
  //     user:data.user
  //   })
  // }

  //   render(){
  //       // {console.log(this.state.user_id)}
  //     // {console.log(this.user)}

  //     return(
  //       <BrowserRouter>
  //       <Layout 
          
  //         handleLogin={this.handleLogin}
  //         loggedInStatus = {this.state.loggedInStatus}
  //         handleLogout={this.handleLogout}>
  //           <Switch>
  //               {/* <Route path={`${match.url}/:id`} component={Categories} /> */}
  //               {/* <Route path="/" exact component={Home}/> */}
  //               <Route  exact path={"/"} render={props=> ( <Products {...props}  handleLogin={this.handleLogin}         handleLogout={this.handleLogout}/>)}/>
  //               {/* <Route path={`${match.url}/:id`} 
  //               render={props=>(
  //                 <Products {...props}  handleLogin={this.handleLogin}         handleLogout={this.handleLogout}/>
  //               )}
  //               /> */}
  //                       <Route path={"/admin/orders"} render={props=> (<Admin><Orders/></Admin>)}/>
  //               <Route path={"/admin/return"} render={props=>(<Admin><Returns/></Admin>)}/>
  //               {/* Padre={"JOSE"} */}
                
  //               <Route path={"/admin/category/new"} render={props=>(<Admin><Category><New Add={this.state.Add}/> </Category></Admin>)}/>
  //               <Route path={"/admin/category"} render={props=>(<Admin><Category Add={this.state.Add}/></Admin>)}/>
  //               <Route path={"/admin/subcategory"} render={props=>(<Admin><Subategory/></Admin>)}/>


  //               <Route path={"/admin/products"} render={props=>(<Admin><ProductosAdmin/></Admin>)} />
  //               <Route path={"/admin/promotions"} render={props=>(<Admin><Promotions/></Admin>)} />
  //               <Route path={"/admin/users"} render={props=>(<Admin><Users/></Admin>)} />
  //               <Route path={"/admin/configurations"} render={props=>(<Admin><Configurations/></Admin>)} />
  //               <Route path={"/admin"} render={props=>(<Admin>Bienvenido al Panel</Admin>)}/>

  //               <Route
  //               path={"/users/Sign_in"}
  //               render={props=> (
  //                 // eslint-disable-next-line
  //                   <Sign_in {...props} 
  //                     handleLogin={this.handleLogin}
  //                     handleSuccessfulAuth={this.handleSuccessfulAuth}
  //                     // handleLogout={this.handleLogout}
  //                     />
                  
  
  //               )}/>


  //               <Route
  //                 path={"/users/Sign_up"}
  //                 render={props=> (
  //                   // eslint-disable-next-line
  //                     <Sign_up {...props} 
  //                       handleLogin={this.handleLogin}
  //                       handleSuccessfulAuth={this.handleSuccessfulAuth}
  //                       // handleLogout={this.handleLogout}
  //                       />
  //                 )}/>
  //               <Route
  //                 path={"/Profile"}
  //                 render={props=>(
  //                   <Profile users= {this.state.user}/>
  //                 )}
  //               />
  //               <Route
  //                 path={"/Chat"}
  //                 render={props=>(
  //                   <Chat {...props}/>
  //                 )}
  //               />
  //               <Route
  //                 path={"/Payment_types"}
  //                 render={ props=>(
  //                   // eslint-disable-next-line
  //                   <Seguimiento_Product {...props}
  //                   handleLogout={this.handleLogout}/>
  //                 )

  //                 }
  //               />

  //               <Route render={props=>(
  //                 // eslint-disable-next-line
  //                   <NoMatch {...props}
  //                    loggedInStatus = {this.state.loggedInStatus}/>
                  
  //               )}/>
                 
            
  //           </Switch>
  //           </Layout>
  //       </BrowserRouter>
  //     )
  //   }
  // }
  
  
