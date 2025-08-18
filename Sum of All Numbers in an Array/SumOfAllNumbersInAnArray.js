function sumArray(arr) {
  let sum = 0;
  let i;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; 
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
