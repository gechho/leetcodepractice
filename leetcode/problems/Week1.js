//****************************************   Day 1    ***********************************************
//*******************************  1523. Count Odd Numbers in an Interval Range   *******************
//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

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


//***************  1491. Average Salary Excluding the Minimum and Maximum Salary   *****************
//You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary. 
// Answers within 10-5 of the actual answer will be accepted.

 
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




// *******************************  9. Palindrome Number   *******************************
var isPalindrome = function(x) {
    let z = x.toString();
    let y = z.split("").reverse().join("");

    if (y === z){
        return true}
    else
        return false;
        

};

console.log(isPalindrome(123));



// *******************************  191. Number of 1 Bits   ************************************************
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as 
// the Hamming weight).

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. 
// In this case, the input will be given as a signed integer type. It should not affect your implementation,
//  as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, 
// the input represents the signed integer. -3.

/*
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    text = n.toString(2);

    return text.replace(/0/g,'').length;
};
console.log(hammingWeight(00000000000000000000000010000000));


// **************************  1281. Subtract the Product and Sum of Digits of an Integer ***************************
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


//*************************************** 976. Largest Perimeter Triangle ***************************************
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


// *************************  1779. Find Nearest Point That Has the Same X or Y Coordinate  *********************
 /* @param {number} x
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
// ***************************************        Day4       ********************************************

// ***************************************  1822. Sign of the Product of an Array  **********************

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


// *************************  1502. Can Make Arithmetic Progression From Sequence  **********************
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



// ***************************************  202. Happy Number  ***************************************
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

  //****************************  1790. Check if One String Swap Can Make Strings Equal ******************
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

// ***************************************   Day 5  ******************************************************
// ***************************** 589. N-ary Tree Preorder Traversal **************************************
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
    const result1 = [];
     
     function geT(obj) {
        for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === "object") {
          geT(value);
        } else  {
          result1.push(value);     
        }
      }
        return result1;
    }
     
     
    return geT(root,result1);
  

}

//a example to help understand the structure of tree node
 var preorder = function(root) {
    console.log(root);
    const result = [];
    for (const prop in root) {
        const value = root[prop];
    
        if (typeof value === 'object') {
            result.push(preorder(value)); // <- recursive call
        }
        else {
            result.push(value);
        }
    }
    return result;
    
};

const data = {
    code: 42,
    items: [{
      id: 1,
      name: 'foo'
    }, {
      id: 2,
      name: 'bar'
    }]
  };
  
  
  function toArray(obj) {
    const result = [];
    for (const prop in obj) {
      const value = obj[prop];
      if (typeof value === 'object') {
        result.push(toArray(value));
      } else {
        result.push(value);
      }
    }
    return result;
  }
  
  console.log(toArray(data));


// *************************************** 496. Next Greater Element I ***************************************

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


// *******************************  1672. Richest Customer Wealth  ******************************* 
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money
// the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.
/*
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let list = [];
  

    for (x of accounts) {

      let wealth = 0;
      // console.log('subarray: '+x);
      for (y of x) {
        wealth += y;
      }
      list.push(wealth);
    }
    return Math.max(...list);
  };

//  solution 2***************using forEach()instead of for loop
var maximumWealth = function (accounts) {
    let list = [];
  
    accounts.forEach(x=>{
      let wealth = 0;
      x.forEach(y => wealth += y);
      list.push(wealth);
    })
    return Math.max(...list);
  }



//****************************************   Day 7    ***********************************************
//*******************************  1572. Matrix Diagonal Sum   **************************************

// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal
// and all the elements on the secondary diagonal that are not part of the primary diagonal.
var diagonalSum = function (mat) {
    let sum = 0;
    let n = mat.length;
    for (i = 0; i < n; i++) {
      sum += mat[i][i];
      if (i !== n - 1 - i) {
        sum += mat[i][n - 1 - i];
      } else {
        continue;
      }
    }
    return sum;
  };
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);



//*******************************  566. Reshape the Matrix   **************************************
/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a 
different size r x c keeping its original data.You are given an m x n matrix mat and two integers r and
 c representing the number of rows and the number of columns of the wanted reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order 
as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, 
output the original matrix.
*/

/*
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function (mat, r, c) {
    // console.log(mat,r,c);
    let m = mat.length;
    let n = mat[0].length;
    let newMat = [];
    let finalMat =[];
    if (r * c !== m * n) return mat;
    else {    
      mat.forEach((element) => {
        element.forEach((item) => {
          newMat.push(item);
          if(newMat.length === c){
              finalMat.push(newMat);
              newMat = [];
          }
        });
      });
      }
    return finalMat;
  };