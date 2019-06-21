import React from 'react'
import { Tabs } from 'antd';
import Categorias from './utils'
import Card from './CardInicio'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const { TabPane } = Tabs;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function TabsMenu() {
  const classes = useStyles();
  return (
    <>

      <Tabs defaultActiveKey="1" >
        <TabPane tab="Arboles" key="1">
          <div className={classes.root}>

            <Grid container spacing={4}>

              {Categorias.Tipo1.map((tipo, index) => {
                return (<>        <Grid item xs={6} sm={3}>
                  <Card {...tipo} />      </Grid>
                </>)
              })}
            </Grid>
          </div>
        </TabPane>
        <TabPane tab="Catacias" key="2">
          <div className={classes.root}>

            <Grid container spacing={3}>

              {Categorias.Tipo2.map((tipo, index) => {
                return (<>        <Grid item xs={6} sm={3}>
                  <Card {...tipo} />      </Grid>
                </>)
              })}
            </Grid>
          </div>
        </TabPane>
        <TabPane tab="Flores de jardin" key="3">
          <div className={classes.root}>

            <Grid container spacing={3}>

              {Categorias.Tipo3.map((tipo, index) => {
                return (<>        <Grid item xs={6} sm={3}>
                  <Card {...tipo} />      </Grid>
                </>)
              })}
            </Grid>
          </div>
        </TabPane>
      </Tabs>
    </>
  )
}