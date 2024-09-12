// write your func here
const Array1 = [12, 1, 8, 20, 5];
const Array2 = [12, 1, 8, 20, 5];
function checkArray() {
  if (Array1.length !== Array2.length) {
    return false;
  }
  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] !== Array2[i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(checkArray());
