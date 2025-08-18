function findMax(arr) {
  let maxNum = arr[0]; 
  let i;

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]; 
    }
  }

  return maxNum;
}

console.log(findMax([5, 1, 9, 3, 15])); 
