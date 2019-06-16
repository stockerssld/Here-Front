import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './List'
import Mensaje from './Mensaje'
import { Route   } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    'padding-top':'1rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid(props) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
{/* // {console.log(props.match.url)} */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          
            <List {...props}/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper  className={classes.paper}>
          <strong>{'Mensajes'}</strong><br/>{'Selecciona un usuario'}
          <Route path={`${props.match.url}/:id`} render={props=> ( <MensajePersona {...props} /> )}/>
          </Paper>
        </Grid>
      </Grid>
           

    </div>
  );
}

function MensajePersona(props){
  return(<Mensaje {...props}></Mensaje>)
}