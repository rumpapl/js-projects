const myMap = function (callbackFun) {
  const modifiedArray = [];
  for (let index = 0; index < this.length; index++) {
    modifiedArray.push(callbackFun(this[index], index, this));
  }
  return modifiedArray;
};

const myForEach = function (callbackFun) {
  for (let index = 0; index < this.length; index++) {
    callbackFun(this[index], index, this);
  }
};

const myPrint = function () {
  return this.join(" | ");
};

Array.prototype["myPrint"] = myPrint;
Array.prototype["myMap"] = myMap;
Array.prototype["myForEach"] = myForEach;
