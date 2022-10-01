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
  console.log(removeDuplicates([1,1,2]));
  
  // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
  var removeDuplicates = function (nums) {
    let k = 0;
    for(let i=nums.length-1;i>=0;i--){
      if (nums[i] == nums[i - 1]) {
        nums.splice(i, 1);
        nums.push("_");
      } else {
        k++;
      }
    }
  
    return k;
  };
  console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// ************************************************** Best Time to Buy and Sell Stock II **************************************************
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  
    prices.forEach((item,index)=>{
      if(item < prices[index+1]){
        profit += prices[index+1]-item;

      }
    })
    return profit;
    }

console.log(maxProfit([7,1,5,3,6,4]))

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
var containsDuplicate = function(nums) {
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
 var singleNumber = function(nums) {
    let Count = {};
    for (i=0;i<nums.length;i++){
        if (Count[nums[i]]==null){
            Count[nums[i]]=1;
        }
        else {
            Count[nums[i]]++;
            if (Count[nums[i]] ==2){
                delete Count[nums[i]];
            }
        }
    }
   return Number(Object.keys(Count));

};


//OR

var singleNumber = function(nums) {
  var result = nums[0];
  for(var i = 1; i < nums.length; i++) {
      result = result^nums[i];
      //^	(Bitwise XOR)	5 ^ 1 =>	0101 ^ 0001=>	0100=>	 4
      // the same number XOR together would return 0000s, and has no effect to the result.
      console.log(result,i)
  }
  return result;
};
console.log(singleNumber([1,3,4,2,5,2,3,4,1]));

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
      let a = numss.splice(i - 1, 1);//need splice numss after splice numsl, as if numss's number and index change, the indexOf[i-1] to locate the same number for numsl changes. it will result numsl splice the wrong number.
      newnums.push(a);
    }
  }
  return newnums;
};