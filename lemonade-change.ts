/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net
transaction is that the customer pays $5.
Note that you do not have any change in hand at first.
Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

Example 1:
Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

Example 2:
Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
 
Constraints:
1 <= bills.length <= 105
bills[i] is either 5, 10, or 20.
*/

/*
Pseduocode
- Maintain hash of money received
- Iterate through bills - use while loop
- If presented a five - aggregate hash value counter, continue 
- If presented a 10, check for a five in the hash, deduct, pay customer, aggregate hash value counter
- If presented a 20, check for three fives, 1 ten and a five
- Return true if change is found for all
- If any value is not found, break early and return false
*/

function lemonadeChange(bills: number[]): boolean {
    let register = {
        "5": 0,
        "10": 0,
        "20": 0
    };
    let length = bills.length - 1;
    let index = 0;

    let truthValue = true;

    while (index <= length) {
        let currCustomerPaid  = bills[index];
        if (currCustomerPaid == 5){
            register["5"] = register["5"] + 1;
            index++;
            continue;
        } else if (currCustomerPaid == 10){
            if (register["5"] >= 1){
                register["5"] = register["5"] - 1;
                register["10"] = register["10"] + 1;
                index++;
                continue;
            } else {
                truthValue = false;
                break;
            }
        } else { // customer paid using a $20
            if (register["5"] >= 3){
                register["5"] = register["5"] - 3;
                register["20"] = register["20"] + 1;
                index++;
                continue;
            } else if (register["5"] >= 1 && register["10"] >= 1){
                register["5"] = register["5"] - 1;
                register["10"] = register["10"] - 1;
                register["20"] = register["20"] + 1;
                index++;
                continue;
            } else {
                truthValue = false;
                break;
            }
        }
    }

    return truthValue;
};
