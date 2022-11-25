// Write your code below this line.
//create a function for the problem
function luckNumbers(n) {
  //create the array
  let luckNumbersArray = [];
  //create an array to pull numbers from
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //create an if statement to check n is between 0 and 10, if Bool no
  if (n === true || n === false) {
    console.log("Nice try, can't break my code!");
  } else if (n >= 0 && n <= 10) {
    //loop n times to get a random number
    for (i = 0; i < n; i++) {
      //create a variable of a random number between 0 and numArray length
      let a = Math.floor(Math.random() * numArray.length);
      // use that random number as the index of numArray and push that value to lucky
      luckNumbersArray.push(numArray[a]);
      //splice that number out of numArray so we don't use it again
      numArray.splice(a, 1);
    }
    //print the new array
    console.log(luckNumbersArray);
    return luckNumbersArray;
  } else {
    //tell the user to select a valid value
    console.log("Enter a number between 0 and 10");
    return luckNumbersArray;
  }
}
//test cases
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
luckNumbers(true);
luckNumbers(false);
