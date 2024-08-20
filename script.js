// function that takes number as input which will be the amount of fibonacci numbers to print
// start with two inputs [0,1] in an array
// in the first loop, at index 2, add the previous two indexes together and pussh the result to the array at index 2
// repeat for input amount of times
// return array with fibonacci numebrs

function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const result = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const fibNum = result[i] + result[i + 1];
    result.push(fibNum);
  }
  return result;

  //   const thirdFib = result[0] + result[1];
  //   result.push(thirdFib);

  //   const forthFib = result[1] + result[2];
  //   result.push(forthFib);
}

console.log(fibs(8));
