/*
You are given a string num representing a large integer. An integer is good if it meets the following conditions:
It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:
A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.

Example 1:
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".

Example 2:
Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

Example 3:
Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
 
Constraints:
3 <= num.length <= 1000
num only consists of digits.
*/

function largestGoodInteger(num: string): string {
    const arrOfNum = num.split("");
    const length = (arrOfNum.length) - 3;
    let index = 0;
    
    while (index <= length){
        let val1 = arrOfNum[index];
        let val2 = arrOfNum[index+1];
        let val3 = arrOfNum[index+2];

        if (val1 == val2 && val1 == val3){
            return `${val1}${val2}${val3}`
        }

        index++;
    }

    return "";
};
