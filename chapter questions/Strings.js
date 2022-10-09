// Day1
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


// Day2
// First Unique Character in a String
/* Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1.
*/
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
    let Count = {};

    for (i = 0; i < s.length; i++) {
        if (Count[s[i]]) {
            Count[s[i]]++
        }
        else {
            Count[s[i]] = 1;
        }
    }

    let keys = [];
    for (const [key, value] of Object.entries(Count)) {
        if (Count[key] == 1) {
            keys.push(key);
        }
    }
    return s.indexOf(keys[0]);
};


// OR
let firstUniqChar = function(s) {
    let map=new Map();
    for(let x of s){
        if(map.has(x)){
            map.set(x,map.get(x)+1);
        }
        else{
            map.set(x,0);
        }
    }
    console.log(map,'map');
    for(let[k,v] of map){
        if(v===0){
            let val=s.indexOf(k);
            return val;
        }
    }    
};


var firstUniqChar = function(s) {
    let count = {};
    for (let eachItem of s) {
        count[eachItem] = (count[eachItem] || 0) + 1;
    }
    for (let e in count){
        if (count[e] === 1) return s.indexOf(e)
    }
    return -1;
};
console.log(firstUniqChar("loewivesdfsdfadrgleetcode"));



// Valid Anagram
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or
phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {

    return t.split("").sort().join()==s.split("").sort().join() ? true:false;
};
console.log(isAnagram("anagram",
"nagaram"))


//  Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 let n = arr.length;

 var isPalindrome = function (s) {
     let regex = /[A-Z]|[a-z]|[0-9]/g;
     let arr = s.toLowerCase().match(regex);
     let result = true;
     if (arr != null) {
         let n = arr.length;
 
         for (i = 0; i <= Math.floor(n / 2); i++) {
             if (arr[i] !== arr[n - 1 - i]) {
                 console.log(arr[i], i, arr[n - 1 - i], n - 1 - i);
                 result = false;
             }
         }
     }
     return result;
 };
 console.log(isPalindrome("1A man, a plan, a canal: Panama0"));

 // String to Integer (atoi)
/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. 
This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. 
Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. 
Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    let nums = [];
    let arr = s.trim().split("");
    let final = -1;

    if (arr[0] === '-' || arr[0] === '+') {
        nums.push(arr[0]);
        arr.shift();
        console.log('+/- arr: ' + arr, 'nums: ' + nums);
    }



    for (i = 0; i < arr.length; i++) {

        if ((arr[i] <= 9)&&(arr[i] !=" ")) {
            nums.push(arr[i])
            console.log(' nums: ' + nums, 'arr[i]: ' + arr[i], 'arr: ' + arr);

        }
        else {
            if (i == 0) {
                console.log('first digit is no-digit: ' + arr[0]);
                return final =0;
                break;
            }
            else {
                console.log('hi,no-digit occurs');
                break;
            }

        }

    }

    final = Number(nums.join(""));
    console.log(nums,final);
    if (nums == '+'||nums =='-') {
        final = 0;
    } 
    if (Math.pow(-2, 31) > final) {

        final = Math.pow(-2, 31);
    }
    else if (final > Math.pow(2, 31) - 1) {

        final = Math.pow(2, 31) - 1;
    }
    return final;
};
console.log(myAtoi("   +0 42"));



// Implement strStr()
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
console.log(strStr("sadbutsad",
"sad"));


// Longest Common Prefix
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let strcom = " ";
    let i = 0;
    let result = true;
    for (i=0;i<strs[0].length;i++){
        let str =strs[0].substring(0,i+1);
        strs.every((item)=>{      
        return result = item.startsWith(str);       
         })
         if (result == true){
            strcom = str;
            console.log(result,i,strcom)
         }


         console.log(result,i,strcom);
    }

    return strcom;

};


//or
let longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return '';
    }
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) {
                return s.slice(0, i);
            }
        }
    }
    return strs[0];
};
console.log(longestCommonPrefix(["flower","flower","flower","flower"]));