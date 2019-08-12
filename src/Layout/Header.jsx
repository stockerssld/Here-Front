import React, { Component } from 'react'
import Navbar from '../components/Navbar/registered';
import axios from 'axios'
import Navbar_unregistered from '../components/Navbar';
export default class Header extends Component{
    constructor(props) {
        super(props)

        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLogoutClick() {
        // console.log(this.props.handleLogout())
        axios.delete("http://localhost:3002/logout", { withCredentials: true }).then(response => {
            this.props.handleLogout()
        }).catch(error => {
            console.log("logout error", error)
        })

        // this.props.handleLogout()
    }
    
    render(props){
    return(
        <div>
             {/* {console.log(this.props)}   */}
                {
                    this.props.loggedInStatus==="LOGGED_IN"?
                    <Navbar  handleLogoutClick={() => this.handleLogoutClick()}/> :
                    // eslint-disable-next-line 
                    <Navbar_unregistered/>

                }
                {/* {console.log(this.props.handleLogout)} */}
            {/* {console.log(this.props.loggedInStatus==="LOGGED_IN")} */}
            {/* <Navbar/>  */}

        </div>
    )}
}