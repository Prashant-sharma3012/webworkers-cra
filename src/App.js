import React from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line
import Worker from 'worker-loader!./worker.js';

function App() {
  let myWorker = new Worker();

  myWorker.postMessage([1,2]);

  myWorker.onmessage = function(e) {
    console.log('Message received from worker');
    console.log(e.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
