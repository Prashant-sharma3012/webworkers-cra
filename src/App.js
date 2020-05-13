import React, { useState } from 'react';
// eslint-disable-next-line
import Worker from 'worker-loader!./worker.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AboutUs from './pages/AboutUs';
import FileUpload from './pages/FileUpload';
import Home from './pages/Home'
import AppContext from './AppContext';
import Header from './components/Header';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#03fcdf'
  },
});

function App() {

  const classes = useStyles();
  const [workbook, setWorkbook] = useState(null)
  const [rows, setRows] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const myWorker = new Worker();

  const store = {
    workbook: { get: workbook, set: setWorkbook },
    rows: { get: rows, set: setRows },
    uploading: { get: uploading, set: setUploading },
    uploaded: { get: uploaded, set: setUploaded },
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
      <Router>
        <div className={classes.container}>
          <Header />
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/upload">
              <FileUpload />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
