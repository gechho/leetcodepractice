
//1523. Count Odd Numbers in an Interval Range
const { count } = require("console");

var countOdds = function(low, high) {
    var c = 0;

    for(let i = low;i <= high; i++ ){
         
        if(i%2 !== 0){
           c = c +1;
        }
    }
return c;
};

console.log(countOdds(3,7));

//1491. Average Salary Excluding the Minimum and Maximum Salary
/*
 * @param {number[]} salary
 * @return {number}
 */

var average = function(salary) {
    // console.log(salary);
    let nl=salary.length-2;
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = salary.reduce(myFunction);
    function myFunction(total,value){
        return total+value;
    }
    return (sum-min-max)/nl;
    
};
console.log(average(average[2809,34254,3432,5566]));


// 9. Palindrome Number
var isPalindrome = function(x) {
    let z = x.toString();
    let y = z.split("").reverse().join("");

    if (y === z){
        return true}
    else
        return false;
        

};

console.log(isPalindrome(123));



// 191. Number of 1 Bits
/*
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    text = n.toString(2);

    return text.replace(/0/g,'').length;
};
console.log(hammingWeight(00000000000000000000000010000000));


// 1281. Subtract the Product and Sum of Digits of an Integer
/*
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const values = n.toString()
    let sum = 0, product = 1
    for (const val of values) {
        sum += Number(val)
        product *= Number(val)
    }
    return product - sum
};


// 976. Largest Perimeter Triangle
/*
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums.sort(function(a,b){return b-a});

    
    for (x=0; x<nums.length-2; x++) {
        if (nums[x+2]+nums[x+1] > nums[x]){
             return nums[x]+nums[x+1]+nums[x+2];
        }  
        }
    return 0;
    };


// 1779. Find Nearest Point That Has the Same X or Y Coordinate
/*
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = (x, y, points) => {
    let closestDist = Infinity;
    let idx = -1;
    for (let i = 0; i < points.length; i++)
        if (x == points[i][0] || y == points[i][1]){
            const dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (dist < closestDist){
                closestDist = dist;
                idx = i;
            }
        }
    return idx;
};
// Day4********************************************

// 1822. Sign of the Product of an Array

var arraySign = function(nums) {
    if(nums.includes(0)) return 0;
    return (nums.filter(item => item < 0).length % 2 === 0 ? 1 : -1);
};

// OR
var arraySign = function(nums) {
    let count=0
    for(let i=0;i<nums.length;i++){
       
        if(nums[i]===0) return 0
        if(nums[i]<0){
            count++
        }
    }
    return (count%2===0)?1:-1
   
};


// 1502. Can Make Arithmetic Progression From Sequence
/*
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    for (i=0;i<arr.length-2; i++){
         arr.sort((a,b)=> a-b);
        return (arr[i]+arr[i+2] === 2 * arr[i+1]) ? true:false;
    }
    
};

//
var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a,b){return a-b});
    var dif = arr[1] - arr[0];
    for(var i=2;i<arr.length;i++){
        if(arr[i]-arr[i-1] !== dif){
            return false;
        }
    }
    return true;
};



// 202. Happy Number
var isHappy = function (n) {
    let happyNumber = false;
    let arr = Array.from(String(n));
    do {
        let sumx = 0;
        arr.forEach(element => {
            sumx += Number(element) ** 2;
        });
        arr = Array.from(String(sumx));
        (sumx == 1) ? happyNumber = true : false;
    }
    while ((arr != 1) && (arr != 4));
            
    return happyNumber;
}

//OR
function isHappy(n) {
    let slow = fast = n;
    while (true) {
      slow = sq(slow);
      fast = sq(sq(fast));
      if (slow === fast) break;
    }
    
    return slow === 1;
  }
  
  function sq(num) {
    let sum = 0;
    while (num > 0) {
      let d = num % 10;
      sum += d * d;
      num = Math.floor(num/10);
    }
    return sum;
  }

  console.log(isHappy(117));

  //1790. Check if One String Swap Can Make Strings Equal
  var areAlmostEqual = function(s1, s2) {
    if (s1.length !==s2.length) return false;
    else {
        let n =0;
        let arr1 = [];
        let arr2 = [];
        for (i=0;i<s1.length;i++){
            if (s1[i] !== s2[i]){  
                arr1.push(s1[i]);
                arr2.push(s2[i]);
                n++;
            }
        }
        if (n>2) return false;
        else {
            return (arr1.sort().join("") == arr2.sort().join(""))? true:false;
        }
    }
};

// Day5
// 589. N-ary Tree Preorder Traversal
/*
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    arr = root.split("null");
    console.log(arr);
    
};

// 496. Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
    let ans = [];
    console.log(nums1, nums2);
    for (i = 0; i < nums1.length; i++) {
        let indexSearch = nums2.indexOf(nums1[i]);
        let nextGreater = -1;
        let greaterNumberFound = false;
        for (j = indexSearch + 1; j < nums2.length; j++) {
            if ((nums2[j] > nums1[i]) && (greaterNumberFound == false)) {
                nextGreater = nums2[j];
                greaterNumberFound = true;
            }
        }
        if (greaterNumberFound == true) {
            ans.push(nextGreater);
        }
        else if (nextGreater == -1) {
            ans.push(-1);
        }
    }
    return ans;
}

// OR
var nextGreaterElement = function(nums1, nums2) {
    const res = []
    for(let n of nums1){
      const idx = nums2.indexOf(n)
      let c = idx+1, found = -1
      while(nums2[idx] > nums2[c]) c++
      if(c<nums2.length) found = nums2[c]
      res.push(found)
    }
    return res
  };
  //OR
  var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let v of nums1) {
        const i = nums2.indexOf(v);
        let find = false;
        for(let j = i + 1; j < nums2.length; j++) {
            if(nums2[j] > v) {
                result.push(nums2[j]);
                find = true;
                break;
            }
        }
        if(!find)
            result.push(-1);     
    }
    return result;
};