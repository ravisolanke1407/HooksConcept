import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        // border:'1px solid',
        background:'black',
        color:'white',
        width:'100%'
      
  },
  nav:{
      display:'flex',
      justifyContent:'space-between'
  },
  ul1:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    padding:0,
    margin:0,
    listStyleType:'none'
  },
  ul2:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    width:'50%',
    padding:0,
    margin:0,
    listStyleType:'none'


  },
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
            <header>
                <nav className={classes.nav}>
                    <ul className={classes.ul1}>
                        <li><h1>Title</h1></li>
                    </ul>
                    <ul className={classes.ul2}>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
