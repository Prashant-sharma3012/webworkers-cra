import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  content: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
      Power Of Web Workers
      </div>
    </div>
  )
}
