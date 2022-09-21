// var canMakeArithmeticProgression = function(arr) {
//     arr.sort((a,b)=> a-b);

const { Console } = require("console");
const { type } = require("os");
const { isString } = require("util");



//     for (i=0;i<arr.length;i++) {
//         if (arr.length <= 2) {
//             return true;
//         } else {
//             if (arr[i+1] * 2 == arr[i] + arr[i+2]) continue;
//             if (arr[i+1] * 2 !== arr[i] + arr[i+2]){
//                 return false;
//             }

//         }

//     }

// };
// var canMakeArithmeticProgression = function(arr) {
//     arr.sort(function(a,b){return a-b});
//     var dif = arr[1] - arr[0];
//     for(var i=2;i<arr.length;i++){
//         if(arr[i]-arr[i-1] !== dif){
//             return false;
//         }
//     }
//     return true;
// };
// console.log(canMakeArithmeticProgression([2,0,4]));


// console.log(canMakeArithmeticProgression([-13,-17,-8,-10,-20,2,3,-19,2,-18,-5,7,-12,18,-17,12,-1]));
// console.log(
//     "hello"
// )
// console.log(canMakeArithmeticProgression([1,2,5]));
// 589. N-ary Tree Preorder Traversal

//   Definition for a Node.
// function Node(val, children) {
//     this.val = val;
//     this.children = children;
//   };

// /*
//  * @param {Node|null} root
//  * @return {number[]}
//  */
// var preorder = function(root) {
//     console.log(Node(root));
// };

// preorder([1,null,3,2,4,null,5,6])





console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
