/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that
adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

function sumOddEven(arr){
    let odd = 0;
    let even = 0;
  
    let length = arr.length-1;
    let index = 0;
  
    while (index <= length){
      if (index == 0 || index % 2 == 0){
        console.log(index);
        even = even + arr[index];
      } else {
        console.log(index)
        odd = odd + arr[index];
      };
      index++;
    };
  
    return odd > even ? odd : even;
  }
  
  console.log(sumOddEven([1,2,3,1]));
  console.log(sumOddEven([2,7,9,3,1]));
  console.log(sumOddEven([60,50,10,100,2]));
  
  // function robHouses(arr){
  //   if (arr.length == 1){
  //     return arr[0];
  //   };
  
  //   if (arr.length == 2){
  //     return arr[0] > arr[1] ? arr[0] : arr[1];
  //   };
  
  //   // [1,2,3,4,5]
  
  //   let length = arr.length - 1;
  //   let index = 0;
  //   let money = 0;
  
  //   while (index <= length) {
  //     let current = arr[index];
  //     let next = arr[index+1];
  
  //     if (current > next){
  //       money = money + current;
  //       index += 2;
  //     }
  //     else {
  //       index++;
  //     };
  
  //     return money;
  //   } 
  // };
  
  // // console.log(robHouses([1]));
  // // console.log(robHouses([1,2]))
  // console.log(robHouses([1,2,4]));
  // // console.log(robHouses([1,2,3,1])); // expect output to be 4
  
  
  // [greatestSum, greatestSum, greatestSum]
  // // [60,50,10,100,2] expect to be 160
  //    [60]
  //    [60, 50]
  //    [60, 50, 10]
  //         (60 + 10), (50)
