onmessage = function(e) {
  // do something async
  myAsyncFunction(e).then(res => {
    postMessage(res);
  })
}

// just multiplies two values and returns them

const myAsyncFunction = (e) => {
  return new Promise((s,f) => {
    return s(e.data[0] * e.data[1]);
  })
}