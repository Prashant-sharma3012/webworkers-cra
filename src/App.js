import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line
import Worker from 'worker-loader!./worker.js';

function App() {

  const [workbook, setWorkbook] = useState(null)
  const [rows, setRows] = useState(null)

  let myWorker = new Worker();

  myWorker.onmessage = function (e) {
    switch (e.data.command) {
      case 'PARSE_EXCEL':
        setWorkbook(e.data.workbook)
        return
      case 'READ_ROWS':
        setRows(e.data.rows)
        return
      default:
        break;
    }
  }

  const handleFile = (t) => {
    myWorker.postMessage({ file: t.target.files, command: 'PARSE_EXCEL' });
  }

  const getRows = () => {
    myWorker.postMessage({ workbook: workbook, sheetName: Object.keys(workbook.Sheets)[0], command: 'READ_ROWS' });
  }

  return (
    <div style={{display: 'flex', flexDirection:'row', height: '100vh', justifyContent: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <input type="file" onChange={handleFile} />
        <button onClick={getRows} disabled={!workbook}>GetRows</button>
      </div>
    </div>
  );
}

export default App;
