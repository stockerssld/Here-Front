import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import  {Tipo1, Tipo2, Tipo3} from './utils'


  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 400,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  
export default function Lista_cuadricular() {

        const classes = useStyles();
        return (
            <>
            <div className={classes.root}>
                <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div"><h3>Cactaceas Seccion 1</h3></ListSubheader>
                </GridListTile>
                    {
                        Tipo1.map(tile => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                                }
                                />
                        </GridListTile>
                    ))}
                </GridList>
                
            </div>
            <br/>
            <div className={classes.root}>
                <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div"><h3>Cactaceas Seccion 2</h3></ListSubheader>
                </GridListTile>
                    {
                        Tipo2.map(tile => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                                }
                                />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <br/>
            <div className={classes.root}>
                <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div"><h3>Cactaceas Seccion 3</h3></ListSubheader>
                </GridListTile>
                    {
                        Tipo3.map(tile => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                                }
                                />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            </>



        )
    }
