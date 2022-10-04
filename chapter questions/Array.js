// ************************************************** Remove Duplicates from Sorted Array **************************************************

/*
 * @param {number[]} nums
 * @return {number}
 */
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

var removeDuplicates = function (nums) {
  let k = 0;
  let seen = [];

  nums.forEach((item, index) => {
    if (seen.includes(item) == false) {
      seen.splice(k, 0, item);
      k++;
    } else {
      seen.push("_");
    }
  });
  return seen;
};
console.log(removeDuplicates([1, 1, 2]));

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
      nums.push("_");
    } else {
      k++;
    }
  }

  return k;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// ************************************************** Best Time to Buy and Sell Stock II **************************************************
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  prices.forEach((item, index) => {
    if (item < prices[index + 1]) {
      profit += prices[index + 1] - item;
    }
  });
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// ************************************************** Rotate Array  **************************************************
/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// ************************************************** Rotate Array  **************************************************
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
  nums.sort();
  let result = false;
  console.log(nums);

  for (i = 0; i < nums.length - 1; i++) {
    console.log(nums[i], nums[i + 1]);
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return result;
};
// OR
var containsDuplicate = function (nums) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (count[curr] == null) {
      count[curr] = 1;
    } else {
      count[curr]++;
      if (count[curr] > 1) {
        return true;
      }
    }
    console.log(count);
  }

  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));

//**************************************************  136. Single Number **************************************************
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let Count = {};
  for (i = 0; i < nums.length; i++) {
    if (Count[nums[i]] == null) {
      Count[nums[i]] = 1;
    } else {
      Count[nums[i]]++;
      if (Count[nums[i]] == 2) {
        delete Count[nums[i]];
      }
    }
  }
  return Number(Object.keys(Count));
};

//OR

var singleNumber = function (nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
    //^	(Bitwise XOR)	5 ^ 1 =>	0101 ^ 0001=>	0100=>	 4
    // the same number XOR together would return 0000s, and has no effect to the result.
    console.log(result, i);
  }
  return result;
};
console.log(singleNumber([1, 3, 4, 2, 5, 2, 3, 4, 1]));

// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

var intersect = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let numsl = [];
  let numss = [];
  let newnums = [];
  let n = Math.min(n1, n2);

  n1 >= n2
    ? (numsl = nums1) && (numss = nums2)
    : (numsl = nums2) && (numss = nums1);

  for (i = n; i > 0; i--) {
    if (numsl.includes(numss[i - 1]) == true) {
      numsl.splice(numsl.indexOf(numss[i - 1]), 1);
      let a = numss.splice(i - 1, 1); //need splice numss after splice numsl, as if numss's number and index change, the indexOf[i-1] to locate the same number for numsl changes. it will result numsl splice the wrong number.
      newnums.push(a);
    }
  }
  return newnums;
};

// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Better solution:
var rotate = function (nums, k) {
  k = k % nums.length;
  console.log(k);
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
// OR
var rotate = function (nums, k) {
  let arr = [];
  let n = 0;
  k > nums.length ? (n = k % nums.length) : (n = k);
  console.log("n: " + n);
  if (k % nums.length == 0) return nums;
  else {
    arr = nums.splice(-n).reverse();
    console.log("arr: " + arr);
    for (x of arr) {
      nums.unshift(x);
    }
    return nums;
  }
};

// Plus One
/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/
/**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//   let arr = "";
//   digits.forEach((element) => {
//     arr += element;
//   });
//    console.log(arr);
//   let num = Number(arr);
//   console.log('num: '+num);
//   var myArr = String(num).split("").map((num)=>{
//     console.log(num);
//     return Number(num) //(as javascript only can not read big number, so after 16th digit, it will show as 0. that's why it won't work )

//   })
//   return myArr;
// };

var plusOne = function (digits) {
  for (i = digits.length; i > 0; i--) {
    if (digits[i - 1] < 9) {
      digits[i - 1]++;
      break;
    } else {
      if (i > 1) {
        digits[i - 1] = 0;
      } else {
        digits[i - 1] = 0;
        digits.unshift(1);
      }
    }
  }
  return digits;
};
// function plusOne(digits) {
//     let co = true;
//     for (let i = digits.length - 1; i >= 0 && co; i--) {
//       digits[i]++;
//       console.log(digits[i]);
//       co = digits[i] >= 10;
//       console.log('co: '+co);
//       console.log('digits i = 0: '+ (digits[i] = 0));
//       co && (digits[i] = 0);
//     }
//     co && digits.unshift(1);
//     return digits;
//   }

// let plusOne = function(digits) {
//   for(let i=digits.length-1;i>=0;i--){
//       digits[i]++;
//       if(digits[i]>9){
//           digits[i]=0;
//       }
//       else{
//           return digits;
//       }
//   }
//   digits.unshift(1);
//   return digits;
// };
console.log(plusOne([8, 9, 9, 9, 9, 9]));

// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));




// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  };
};

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (i = 0; i < nums.length; i++) {
//     if ((nums.includes(target - nums[i])) && (nums.indexOf(target - nums[i])) !== i) {
//         console.log(nums[i],target-nums[i],nums.indexOf(target - nums[i]))
//       arr.push(i, nums.indexOf(target - nums[i]));
//       break;
//     }
//   }
//   return arr;
// };

// var twoSum = function(nums, target) {
//     var map = new Map();

//     for(var i = 0; i<nums.length; i++) {
//         var num = nums[i];
//         if(map.get(num) === undefined) map.set(target-num, i);
//         else return [map.get(num), i];
//     }
//   };
function twoSum(nums, target) {
  let vals = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target-nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }
  return [];
};
console.log(twoSum([3,2,4],
  6));


// Valid Sudoku
/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function (board) {
  let result = true;

  for (i = 0; i < 9; i++) {
    let arr1 = {};
    for (j = 0; j < 9; j++)
      if (board[i][j] !== "." && arr1[board[i][j]]) {
        result = false;
        break;
      } else arr1[board[i][j]] = 1;
  }

  for (j = 0; j < 9; j++) {
    let arr2 = {};
    for (i = 0; i < 9; i++)
      if (board[i][j] !== "." && arr2[board[i][j]]) {
        result = false;
        break;
      } else arr2[board[i][j]] = 1;
  }
  let arr = [0, 3, 6];
  for (x of arr) {
    for (y of arr) {
      let arr3 = {};
      for (i = x; i < x + 3; i++) {
        for (j = y; j < y + 3; j++)
          if (arr3[board[i][j]] && board[i][j] !== ".") {
            result = false;

            break;
          } else arr3[board[i][j]] = 1;
      }
    }
  }
  return result;
};
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);



  //Rotate Image
/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   let n = matrix.length;
//   let arr = [];
//   let matrix1=matrix;

//   for (j = 0; j < n; j++) {
//     let num = [];
//     for (i = n - 1; i >= 0; i--) {
//       num.push(matrix1[i][j]);
//     //   console.log(num);
//     }
//     arr.push(num);
//     // console.log(arr);
//   }
//   return arr;
// };
var rotate = function(matrix) {
  let n = matrix.length;
   matrix.reverse();
   for(i=0;i<n;i++){
      for(j=0;j<i;j++){
          let temp = matrix[i][j];
          matrix[i][j]= matrix[j][i];
          matrix[j][i] = temp;
      }
   }
   return matrix;
};

console.log(
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
])
);

