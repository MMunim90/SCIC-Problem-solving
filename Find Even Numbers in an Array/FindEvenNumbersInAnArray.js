function findEvenNumber(arr) {
  const even = [];
  let i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      even.push(arr[i]); 
    }
  }

  return even;
}

console.log(findEvenNumber([1, 2, 3, 4, 5, 6]));
