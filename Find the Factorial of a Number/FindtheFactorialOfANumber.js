function fact(n) {
  let res = 1; 
  let i;

  for (i = 1; i <= n; i++) {
    res = res * i; 
  }

  return res;
}

console.log(fact(6)); 
