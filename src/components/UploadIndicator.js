import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CheckCircle from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles({
  container: {
    display: 'flex'
  },
  label: {
    marginRight: '8px'
  }
});


export default function UploadIndicator() {
  const context = useContext(AppContext);
  const classes = useStyles()

  const viewFile = () => {

  }

  return (
    <div className={classes.container}>
      <div className={classes.label}>
        {context.uploading.get
          ? 'Processing'
          : ''
        }
        {
          context.uploaded.get
            ? 'Completed'
            : ''
        }
      </div>
      <div>
        {context.uploading.get &&
          <CircularProgress
            color="secondary"
            size={24}
            thickness={4}
          />
        }
      </div>
      <div>
        {context.uploaded.get &&
          <IconButton style={{padding: '0'}} onClick={viewFile}>
            <CheckCircle style={{ color: '#fc4a1a' }} />
          </IconButton>
        }
      </div>
    </div>
  )
}
