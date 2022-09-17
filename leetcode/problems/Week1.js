
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