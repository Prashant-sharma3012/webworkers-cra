import React, { useContext } from 'react'
import AppContext from '../AppContext';

export default function FileUpload() {

  const context = useContext(AppContext);

  const handleFile = (t) => {
    context.uploading.set(true);
    
    context.worker.postMessage({
      file: t.target.files, command: 'PARSE_EXCEL'
    });
  }

  return (
    <div>
      File Uploader
      <input type="file" onChange={handleFile} />
    </div>
  )
}
