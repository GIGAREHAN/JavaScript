/* 
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

16  -->  1 + 6 = 7
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
*/

//Code ----

function digitalRoot(n) {
  
  // Seperates each digit and put it in list
  let digits = String(n).split('').map(Number);
  
  // Add all digits
  let total = sum(digits);
  
  // Check if addition gives a unit digit or not
  if(String(total).length === 1) {
    
    return sum(digits);
  } else {
    
    // Recurssion: runs until we get a unit digit
    return digitalRoot(total);
    
  };
};

// function to add all digits of an array
function sum(array) {
  
  let total = 0;
  for (let num of array) {
    
    total += num;
  };
  return total;
};
