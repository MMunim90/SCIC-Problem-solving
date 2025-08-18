function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");

  if(str === reverse){
    return true;
  }
  else{
    return false;
  }
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));
