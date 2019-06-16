import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Lista_Cuadricular from './Lista_cuadricular';
import NavTabs from './tabs';
// import Cards from '../../components/products/cards';
// import  {Tipo1, Tipo2, Tipo3} from './utils'


//  function Products(props) {
    
//    const classes = useStyles();
//   return (
//     <div>
      // <Paper className={classes.root}>
      //   <Typography variant="h5" component="h3">
      //     Vea nuestros Productos
      //     {/* {contenido} */}
      //     <h1>Status:{this.props.loggedInStatus}</h1>
      //   </Typography>
      //   {/* eslint-disable-next-line */}
      //   <NavTabs/>
        
      // </Paper>
//     </div>
//   );
// }

class Products extends Component{
  render(){
    return(
      <div>
      <Typography variant="h5" component="h3">
        Vea nuestros Productos
        {/* {contenido} */}
        <h1>Status:{this.props.loggedInStatus}</h1>
      </Typography>
      {/* eslint-disable-next-line */}
      <NavTabs/>
      </div>
    )
  }
}

export default Products