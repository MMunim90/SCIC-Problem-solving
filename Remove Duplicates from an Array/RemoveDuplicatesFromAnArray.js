function removeDuplicate(arr) {
  const unique = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
