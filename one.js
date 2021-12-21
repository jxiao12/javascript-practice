// Problem 1
// Write functions for sum, difference, product, and quotient of any number.
function one(){
  var sum = arguments[0]
  var difference = arguments[0];
  var product = arguments[0];
  var quotient = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    sum += arguments[i];
    difference -= arguments[i];
    product *= arguments[i];
    quotient /= arguments[i];
  }
  console.log(sum, difference, product, quotient);
}

// one(1, 2, 3, 4)


// Problem 2
// Write a function to calculate the odd number that can
// be formed between any two numbers. The number must be a
// single digit. For example: Calculate the odd number
// that can be formed between 0 and 3 is 01, 21, 03, 13, 23, 31

function two(a, b){
  if (a == b) {
    if (a % 2 == 0) {
      console.log("no number");
    } else {
      console.log(a);
    }
  } else if (a > b) {
    for (var i = b; i <= a; i++) {
      for (var j = b; j <= a; j++) {
        var num = Number(i + "" + j);
        if (num % 2 != 0 && i !== j) {
          console.log(num);
        }
      }
    }
  } else {
    for (var i = a; i <= b; i++) {
      for (var j = a; j <= b; j++) {
        var num = Number(i + "" + j);
        if (num % 2 != 0 && i !== j) {
          console.log(num);
        }
      }
    }
  }
}

// two(0, 3);

// Problem 3
// Find the Fibonacci Sequence
function Fibonacci(x){
  var array = [];
  array[0] = 1;
  array[1] = 1;
  for (var i = 2; i < x; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  console.log(array);
}
Fibonacci(5);
