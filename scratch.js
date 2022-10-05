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