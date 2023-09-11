const calculateButtonEle = document.getElementById("cal-btn");
const changeBackgroundColorButtonEle = document.getElementById("chng-bg-btn");
const divEle = document.getElementById("total");

calculateButtonEle.addEventListener("click", () => {
  const worker = new Worker("./lib/calculate-worker.js");
  worker.postMessage("");
  worker.onmessage = function (message) {
    // console.log(message);
    console.log("Total: ", message?.data);
    divEle.innerHTML = "Total: " + message?.data;
  };

  //   let sum = 0;
  //   for (let index = 0; index < 10000000000; index++) {
  //     sum += index;
  //   }
  //   console.log("Total: ", sum);
});

changeBackgroundColorButtonEle.addEventListener("click", () => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
