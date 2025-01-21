/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:
The given address is a valid IPv4 address.
*/
function defangIPaddr(address: string): string {
    let defangedString = ""

    let split = address.split("");
    let length = split.length - 1;
    let index = 0;

    while (index <= length){
        let char = split[index];
        if (char == "."){
            char = "[.]"
        };
        defangedString += char
        index++;
    };

    return defangedString;
};
