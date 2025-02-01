/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Example 2:
Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
 
Constraints:
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.
*/

/*
Algo:
- Iterate through arr2
- Check arr1 for num of apppearances of the current index of arr2
- Add num of appearances of the curr index to sortedArr; 
- return sortedArr
*/

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let sortedArr = [];

    arr2.forEach((value) => {
        let counter = 0;

        while (true) {
            let index = arr1.indexOf(value)
            if (index == -1){
                // stop loop, continue to the next val in arr2
                break;
            };
            counter++;
            arr1.splice(index, 1);
        };

        // add the value to the array x amount of times depending on appearance
        sortedArr.push(...Array(counter).fill(value));
    });

    // push elements distinct to arr1
    // sorted the element in ascending order first
    arr1.sort((a, b) => a - b);
    sortedArr.push(...arr1)

    return sortedArr;
};
