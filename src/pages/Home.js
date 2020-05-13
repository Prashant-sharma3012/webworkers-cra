import React, { useState } from 'react'
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
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column'
  },
  note: {
    fontSize: '1.5rem',
    color: '#fc4a1a',
    fontWeight: 700
  }
});

export default function Home() {
  const classes = useStyles();
  const [timer, setTimer] = useState('00:00:00')

  const interval = setInterval(() => {
    let date = new Date();
    setTimer(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  }, 1000);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.note}>
          Power Of Web Workers
        </div>
        <div className={classes.note}>
          To make Sure UI is Not stuck Here is a Timer - {timer}
        </div>
      </div>
    </div>
  )
}
