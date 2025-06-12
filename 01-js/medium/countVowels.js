/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  let countVowels = 0;
  vovels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase();
  str = str.split("");

  console.log(str);

  for (let i = 0; i < str.length; i++) {
  //   if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
  //     countVowels++;
  // }
    if (vovels.includes(str[i])){               
       countVowels++; 
      }
  }

  return countVowels;
}

console.log(countVowels("baaatregasfg sf, gfab"));

module.exports = countVowels;