onmessage = function (message) {
  console.log("worker running...");
  let sum = 0;
  for (let index = 0; index < 10000000000; index++) {
    sum += index;
  }
  console.log("worker finished.");
  postMessage(sum);
};
