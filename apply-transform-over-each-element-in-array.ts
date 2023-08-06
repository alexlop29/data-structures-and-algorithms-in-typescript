function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const returnedArray = [];
  arr.forEach(function (value, index) {
    returnedArray.push(fn(value, index));
  });
  return returnedArray;
};
