import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Lista_Cuadricular from './Lista_cuadricular';
import NavTabs from './tabs';
// import Cards from '../../components/products/cards';
// import  {Tipo1, Tipo2, Tipo3} from './utils'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

export default function Products(props) {
    
   const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Vea nuestros Productos
          {/* {contenido} */}
        </Typography>
        {/* eslint-disable-next-line */}
        <NavTabs/>
        
      </Paper>
    </div>
  );
}
