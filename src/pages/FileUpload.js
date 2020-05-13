import React, { useContext } from 'react'
import AppContext from '../AppContext';
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  forStyling: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  fileInput: {
    marginTop: '.5rem',
    padding: '2rem',
    border: '2px solid #fc4a1a',
    borderRadius: '6px',
    width: '40rem',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function FileUpload() {
  const classes = useStyles();
  const context = useContext(AppContext);

  const handleFile = (t) => {
    context.uploading.set(true);

    context.worker.postMessage({
      file: t.target.files, command: 'PARSE_EXCEL'
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.forStyling}>
          <div>
            File Uploader
        </div>
          <div className={classes.fileInput}>
            <input type="file" onChange={handleFile} />
          </div>
        </div>
      </div>
    </div>
  )
}
