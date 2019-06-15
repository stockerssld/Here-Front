import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Layout from '../Layout'
import Products from '../Pages/Products';

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
   
    render(){
      return(
        <BrowserRouter>
            <Switch>
                {/* <Route path={`${match.url}/:id`} component={Categories} /> */}
                {/* <Route path="/" exact component={Home}/> */}
                <Route 
                exact
                path={"/"}
                render={props=> (
                  <Layout><Products {...props} 
                  
                  /></Layout>
  
                )}/>
            
                <Route render={props=>(
                  <Layout>
                    <NoMatch {...props}/>
                  </Layout>
                )}/>
                 
            
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  