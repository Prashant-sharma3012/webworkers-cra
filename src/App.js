import React, { useState } from 'react';
// eslint-disable-next-line
import Worker from 'worker-loader!./worker.js';

const AppContext = React.createContext({});

function App() {

  const [workbook, setWorkbook] = useState(null)
  const [rows, setRows] = useState(null)
  const myWorker = new Worker();

  const store = {
    workbook: { get: workbook, set: setWorkbook },
    rows: { get: rows, set: setRows },
    worker: myWorker
  }

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

  return (
    <AppContext.Provider value={store}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', justifyContent: 'center' }}>

      </div>
    </AppContext.Provider>
  );
}

export default App;
