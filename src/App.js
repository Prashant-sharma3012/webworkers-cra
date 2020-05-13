import React from 'react';
import logo from './logo.svg';
import './App.css';
import XLSX from 'xlsx';

// eslint-disable-next-line
import Worker from 'worker-loader!./worker.js';

function App() {
  let myWorker = new Worker();

  myWorker.onmessage = function(e) {
    console.log('Message received from worker');
    console.log(e.data);
  }

  const handleFile = (t) => {
    myWorker.postMessage(t.target.files);
  }

  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
    </div>
  );
}

export default App;
