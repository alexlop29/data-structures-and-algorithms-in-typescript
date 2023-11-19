/*
Given an integer n, return the smallest prime palindrome greater than or equal to n.
An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.
For example, 2, 3, 5, 7, 11, and 13 are all primes.
An integer is a palindrome if it reads the same from left to right as it does from right to left.
For example, 101 and 12321 are palindromes.
The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].

Example 1:
Input: n = 6
Output: 7

Example 2:
Input: n = 8
Output: 11

Example 3:
Input: n = 13
Output: 101
 
Constraints:
1 <= n <= 108
*/

function isPrime(num: number): boolean {
    let start = 2;

    if (num == 1){
        return false;
    }

    while (start < num){
        if (num % start == 0){
            return false;
        }
        start++;
    }
    return true;
}

function isPalindrome(num: number): boolean {
    let arrOfNum = Array.from(String(num), Number);
    let pointer1 = 0;
    let pointer2 = arrOfNum.length-1;
    while (pointer1 <= pointer2){
        if (arrOfNum[pointer1] != arrOfNum[pointer2]){
            return false;
        }
        pointer1++;
        pointer2--;
    }
    return true;
}


function primePalindrome(n: number): number {
    let start = n;
    let end = n+20000;

    while (start <= end){
        let checkIfPrime = isPrime(start);
        // console.log(`start: ${start}, checkIfPrime: ${checkIfPrime}`);
        if (checkIfPrime == false){
            start++;
            continue;
        }
        let checkIfPalindrome = isPalindrome(start);
        // console.log(checkIfPalindrome);
        if (checkIfPalindrome == false){
            start++;
            continue;
        }
        return start;
    }
};
