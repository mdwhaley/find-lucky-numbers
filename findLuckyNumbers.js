// Write your code below this line.
function luckNumbers(n) {
  n = Number(n);
  let luckNumbersArray = [];
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (n >= 0 && n <= 10) {
    for (i = 0; i < n; i++) {
      let a = [Math.floor(Math.random() * numArray.length)];
      luckNumbersArray.push(numArray[a]);
      numArray.splice(a, 1);
    }
    console.log(luckNumbersArray);
  } else {
    console.log("Enter a number between 0 and 10");
  }
}
luckNumbers(10);
luckNumbers(9);
luckNumbers(8);
luckNumbers(7);
luckNumbers(6);
luckNumbers(5);
luckNumbers(4);
luckNumbers(3);
luckNumbers(2);
luckNumbers(1);
luckNumbers(0);
luckNumbers(12);
luckNumbers("a");
