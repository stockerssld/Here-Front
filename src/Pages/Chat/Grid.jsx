import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './List'
import Mensaje from './Mensaje'
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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          
            <List/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          
          <Mensaje/>
          </Paper>
        </Grid>
      </Grid>
     
    </div>
  );
}