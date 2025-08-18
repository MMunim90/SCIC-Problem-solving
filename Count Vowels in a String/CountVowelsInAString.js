
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  let i;
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("a quick brown fOx jUmp over thE lazy dog"));     
