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