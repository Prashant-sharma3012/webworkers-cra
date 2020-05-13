import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import UploadIndicator from './UploadIndicator'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor:'#dfdce3',
    boxShadow: '8px 8px 6px -6px #606060'
  },
  banner: {},
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0rem 1rem'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover':{
      color: '#F53240'
    }
  },
  linkContainer: {
    marginLeft: '1rem'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <Link className={classes.link} to="/">Web Workers</Link>
      </div>
      <div className={classes.menu}>
        <div>
          <UploadIndicator />
        </div>
        <div className={classes.linkContainer}>
          <Link  className={classes.link} to="/about">About Us</Link>
        </div>
        <div className={classes.linkContainer}>
          <Link  className={classes.link} to="/upload">Upload</Link>
        </div>

      </div>
    </div>
  )
}
