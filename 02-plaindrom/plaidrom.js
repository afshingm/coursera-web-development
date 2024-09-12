// write your func here
function checkpal() {
  const string = "racecar";
  const split = string.split("");
  const reversed = split.reverse();
  const joined = reversed.join("");
  return string === joined;
}
console.log(checkpal());
