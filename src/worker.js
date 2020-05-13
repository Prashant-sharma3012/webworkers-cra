import XLSX from 'xlsx';

onmessage = function (e) {

  switch (e.data.command) {
    case 'PARSE_EXCEL':
      return parseExcel(e).then(res => postMessage(res))    
    case 'READ_ROWS':
      return readRows(e).then(res => postMessage(res))
    default:
      break;
  }

}

// just multiplies two values and returns them

const parseExcel = (e) => {
  return new Promise((s, f) => {
    let file = e.data.file
    let command = e.data.command

    let reader = new FileReader();

    reader.readAsArrayBuffer(file[0]);

    reader.onload = function (evnt) {
      console.log("Processing file at", new Date())
      var data = new Uint8Array(evnt.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      var endTime = new Date();

      console.log("Finished at", endTime)
      s({workbook , command});
    };
  })
}

const readRows = (e) => {
  let { workbook, sheetName, command } = e.data

  return new Promise((resolve) => {
    console.log("Starting to Scan", new Date())
    var rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
    console.log("Scan Complete", new Date())
    resolve({rows, command});
  });
}