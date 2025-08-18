function reverse(str) {
  let rev = "";
  let i;
  for (i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

console.log(reverse("munim")); 