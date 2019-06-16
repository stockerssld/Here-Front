import React, { Component } from 'react'
import Navbar from '../components/Navbar/registered';
import axios from 'axios'
import Navbar_unregistered from '../components/Navbar';
export default class Header extends Component{
   
    render(props){
    return(
        <div>
               
                {
                    this.props.loggedInStatus==="LOGGED_IN"?
                    <Navbar/> :
                    <Navbar_unregistered/>

                }
            {console.log(this.props.loggedInStatus==="LOGGED_IN")}
        </div>
    )}
}