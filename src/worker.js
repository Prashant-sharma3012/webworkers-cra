import XLSX from 'xlsx';

onmessage = function(e) {
  // do something async
  myAsyncFunction(e).then(res => {
    postMessage(res);
  })
}

// just multiplies two values and returns them

const myAsyncFunction = (e) => {
  return new Promise((s,f) => {
    let file = e.data

    let reader = new FileReader();

    reader.readAsArrayBuffer(file[0]);

    reader.onload = function (evnt) {
      console.log("Processing file at", new Date())
      var data = new Uint8Array(evnt.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      var endTime = new Date();

      console.log("Finished at", endTime)
      s(workbook);
  };

  })
}