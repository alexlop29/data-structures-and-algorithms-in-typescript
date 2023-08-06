function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let result = [];
  arr.forEach((value, index) => {
    let run_result = fn(value, index);
    if (run_result) {
      result.push(value);
    };
  });
  return result;
};
