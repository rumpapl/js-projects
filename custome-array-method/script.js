const my_map_result = [1, 2, 3].myMap((item) => {
  return item * 6;
});

console.log(my_map_result);

const map_result = [1, 2, 3].map((item) => {
  return item * 3;
});

console.log(map_result);

[1, 2, 3].myForEach((item) => {
  console.log(item);
});

[1, 2, 3].forEach((item) => {
  console.log(item);
});

const arrayToStringText = [1, 2, 3].myPrint();
console.log(arrayToStringText);
