module.exports = function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();

  let length = first.length + second.length + 1;
  let c = (new Array(length)).fill(0);
  let firstNumber = 0;
  
 for (let ix = 0; ix < first.length; ix++) {
  for (let jx = 0; jx < second.length; jx++) {
    let index = ix + jx - 1;

    index < 0
      ? firstNumber = parseInt(first[ix] * second[jx]) 
      : c[index] += parseInt(first[ix] * second[jx]);
  }
 }

 c.unshift(firstNumber);

 for (let ix = 0; ix < length; ix++) {
  c[ix + 1] +=  parseInt(c[ix] / 10);
  c[ix] = parseInt(c[ix] % 10);
 }
  
 while (length && !c[length]) {
  length--;
 }

 return c.slice(0, length + 1).reverse().join('');
}
