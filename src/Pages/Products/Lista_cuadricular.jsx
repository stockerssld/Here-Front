// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './utils';
// import Cards from '../../components/products/cards';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// export default function Lista_Cuadricular() {
//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}>
//          {/* <GridList cellHeight={180} className={classes.gridList}>
//          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//          <ListSubheader component="div">Productos</ListSubheader>
//          </GridListTile> */}
//          {
//              tileData.map((image, index) => {
//                 return (<img src={image} key={index} onClick={this.handlePreview} alt="" width="160" />);
//               })
//          }

//          {/* </GridList> */}
//       </div>
//     );
//   }

import React, { Component } from 'react'
import { previewImage } from 'zent';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const imgArr = [
    {
        img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/59918436_417427715502256_898639018114154496_n.jpg?_nc_cat=101&_nc_ht=scontent.fmex10-2.fna&oh=8b3e258d182ad8e31268d97f3cdc7d6f&oe=5D869E9D',
        title: 'Imagen1',
        author:'Saul Maye'
    },{
        img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/59918436_417427715502256_898639018114154496_n.jpg?_nc_cat=101&_nc_ht=scontent.fmex10-2.fna&oh=8b3e258d182ad8e31268d97f3cdc7d6f&oe=5D869E9D',
        title: 'Imagen1',
        author:'Saul Maye'
    },{
        img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/59918436_417427715502256_898639018114154496_n.jpg?_nc_cat=101&_nc_ht=scontent.fmex10-2.fna&oh=8b3e258d182ad8e31268d97f3cdc7d6f&oe=5D869E9D',
        title: 'Imagen1',
        author:'Saul Maye'
    },{
        img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/59918436_417427715502256_898639018114154496_n.jpg?_nc_cat=101&_nc_ht=scontent.fmex10-2.fna&oh=8b3e258d182ad8e31268d97f3cdc7d6f&oe=5D869E9D',
        title: 'Imagen1',
        author:'Saul Maye'
    },{
        img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/59918436_417427715502256_898639018114154496_n.jpg?_nc_cat=101&_nc_ht=scontent.fmex10-2.fna&oh=8b3e258d182ad8e31268d97f3cdc7d6f&oe=5D869E9D',
        title: 'Imagen1',
        author:'Saul Maye'
    }
  ];


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
            <div className={classes.root}>
                <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div"><h3>Cactaceas Seccion 1</h3></ListSubheader>
                </GridListTile>
                    {
                        imgArr.map(tile => (
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




        )
    }
