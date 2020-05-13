import React, { useContext } from 'react'
import AppContext from '../AppContext';

export default function FileUpload() {

  const context = useContext(AppContext);

  const handleFile = (t) => {
    context.worker.postMessage({
      file: t.target.files, command: 'PARSE_EXCEL'
    });
  }

  const getRows = () => {
    context.worker.postMessage({
      workbook: context.workbook.get,
      sheetName: Object.keys(context.workbook.get.Sheets)[0],
      command: 'READ_ROWS'
    });
  }

  return (
    <div>
      File Uploader
      <input type="file" onChange={handleFile} />
      <button onClick={getRows} disabled={!context.workbook.get}>GetRows</button>
    </div>
  )
}
