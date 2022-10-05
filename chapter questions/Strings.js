// Reverse String
/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
    let n = s.length - 1;
    for (i = 0; i <= Math.floor(n/2); i++) {
        let temp = '';
        temp = s[i];
        s[i] = s[n - i];
        s[n - i] = temp;

        console.log(s[i], s[n - i], i, temp);
    }
    return s;
};
console.log(reverseString(["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]));



// Reverse Integer
/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function (x) {

    let arr = String(x).split("");
    let n = arr.length - 1;

    if (arr[0] == '-') {
        for (i = 1; i <= Math.floor(n / 2); i++) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[n + 1 - i];
            arr[n + 1 - i] = temp;
            // console.log(i, arr[i], arr[n + 1 - i]);
        }

    }
    else {
        for (i = n; i > Math.ceil((n - 1) / 2); i--) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[n - i];
            arr[n - i] = temp;
            // console.log(i, arr[i], arr[n - i]);

        }

    }
    if (Number(arr.join("")>=-(2**31)) && (Number(arr.join(""))<=2**31-1)) {
        return Number(arr.join(""));
    }
    else return 0;
};

console.log(reverse(-13425465430));