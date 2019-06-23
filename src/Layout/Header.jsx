import React, { Component } from 'react'
import Navbar from '../components/Navbar/registered';
import axios from 'axios'
import Navbar_unregistered from '../components/Navbar';
export default class Header extends Component{
    // constructor(props){
    //     super(props)
    //     this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    //     this.handleLogoutClick = this.handleLogoutClick.bind(this)
    // }

    // handleSuccessfulAuth(data){
    //     this.props.handleLogin(data)
    //     this.props.history.push("/")

    // }

    // handleLogoutClick(){
    //     axios.delete("http://localhost:3000/logout",{withCredentials: true}).then(response=>{
    //         this.props.handleLogout()
    //     }).catch(error => {
    //         console.log("logout error", error)
    //     })

    //     this.props.handleLogout()
    // }
    
    render(props){
    return(
        <div>
               
                {
                    this.props.loggedInStatus==="LOGGED_IN"?
                    <Navbar {...props}/> :
                    <Navbar_unregistered/>

                }
                {/* {console.log(this.props.handleLogout)} */}
            {/* {console.log(this.props.loggedInStatus==="LOGGED_IN")} */}
            {/* <Navbar/>  */}

        </div>
    )}
}