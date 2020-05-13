import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {

  },
});


export default function UploadIndicator() {
  const context = useContext(AppContext);
  const classes = useStyles()

  const viewFile = () => {
    
  }

  return (
    <div className={classes.context}>
      <div>
        {context.uploading.get
          ? 'Processing File'
          : ''
        }
        {
          context.uploaded.get
          ? 'Processing Complete'
          : ''
        }
      </div>
      <div>
        {context.uploaded.get && 
          <button onClick={viewFile}>view</button>
        }  
      </div>
    </div>
  )
}
