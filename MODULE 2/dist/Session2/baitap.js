"use strict";
//bài 1-----------
let nums = [2, 7, 11, 15];
let target = 9;
let output = [];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            output.push(i, j);
            break;
        }
    }
}
// console.log(output)
//bài 2--------------
const isCheck = (str) => {
    let openString = ['(', '{', '['];
    let closeString = [')', '}', ']'];
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (openString.includes(str[i])) {
            stack.push(str[i]);
        }
        else {
            if (closeString.includes(str[i])) {
                const matchBra = openString[closeString.indexOf(str[i])];
                if (stack.length === 0 || stack.pop() !== matchBra) {
                    return false;
                }
            }
        }
    }
    console.log(stack);
    return stack.length === 0;
};
// console.log(isCheck("()({})"))
//bài 3-----------------
var regex = /[!@#$%^&*(),.?":{}|<>\/-]/;
var regex = /[^a-z0-9]/g;
let s = "A man, a plan, a canal: Panama";
let newS = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "").split("");
const sReverse = newS.reverse().join();
const sAfter = newS.join();
if (sReverse == sAfter) {
    console.log(true);
}
else {
    console.log(false);
}
// bài 4-----------------
const st = "anagram";
const tt = "nagaram";
let newSt = st.toLowerCase().split("").sort().join('');
let newTt = tt.toLowerCase().split("").sort().join('');
let result = newSt == newTt ? true : false;
console.log(result);
// bài 5------------------
let numbs = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = 0;
let currentSum = 0;
for (let i = 1; i < numbs.length; i++) {
    currentSum = Math.max(numbs[i], currentSum + numbs[i]);
    maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);
