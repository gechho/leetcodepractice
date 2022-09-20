// var canMakeArithmeticProgression = function(arr) {
//     arr.sort((a,b)=> a-b);



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

var isHappy = function (n) {
    let happyNumber = false;

    let arr = Array.from(String(n));
    let final = 1;

    let sqsum = 0;

    do {
        let sumx = 0;
        //first time running = arr[0] sq + arr[1] sq 
        // console.log ("Run# " + sqsum);
        // sqsum += 1;


        // let sumx = Number(arr[0])**2 + Number(arr[1]**2);
        arr.forEach(element => {
            sumx += Number(element) ** 2;
            // console.log('sumx is :' + sumx);

        });
        arr = Array.from(String(sumx));
        (sumx == 1) ? happyNumber = true : false;
        // (sumx == 4) ? happyNumber = false : false;
        // console.log(arr);
        // console.log(arr.map(Number).join(""));




    }
    while (((arr.map(Number).join("")) != 1) && (arr.map(Number).join("")) != 4);
    // while ( (arr.length > 1 ) && (arr[0]!=='1')  );



    // // n = n.toString().split("");
    // console.log(n);
    // let total = 0;

    //     for (i=0; i<n.length;i++){
    //         total +=i;
    //         console.log(total);
    //         (i-(n.length -1))===0 ? console.log(total):false;
    //     }
    // }

    return happyNumber;
