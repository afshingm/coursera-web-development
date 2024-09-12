const string = "Ea anim excepteur sunt do duis labore voluptate dolor.";
const splited = string.split(" ");
function longestStr() {
  let longest = " ";
  let checkWord = 0;
  for (let word of splited) {
    if (word.length > checkWord) {
      longest = word;
      checkWord = word.length;
    }
  }
  return longest;
}
console.log(longestStr());
