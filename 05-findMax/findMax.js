// write your func here
const nums = [12, 1, 8, 20, 5];
function max(entry) {
  if (entry && Array.isArray(entry)) {
    const maxNum = entry.reduce(function (acc, curr) {
      if (curr > acc) return curr;
      return acc;
    });
    return maxNum;
  }
  return null;
}
const result = max(nums);
console.log(result, "is greter than others");
