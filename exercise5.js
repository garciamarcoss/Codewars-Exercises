//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0;
    
    while (num >= 10) {
      let digits = num.toString().split('').map(Number);
      num = digits.reduce((acc, cur) => acc * cur);
      count++;
    }
    return count;
  }

