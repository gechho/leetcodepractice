// var rotate = function (nums, k) {
//   let a = nums.splice(-k, k);
//   nums.unshift(a);

//   return nums; //
// };
// console.log(rotate([1, 2, 3, 4, 5, 6, 7,9,3,4,5], 5));


// var containsDuplicate = function(nums) {
//     let hashMap = {};
    
//     for(let i=0;i<nums.length;i++){
//         if(hashMap[nums[i]]){
//             return true;
//         }else{
//             hashMap[nums[i]]=true
//         }
//         console.log(hashMap);
//     }
//     return false
    
// };
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