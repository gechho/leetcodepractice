// 589. N-ary Tree Preorder Traversal
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)

// const { Serializer } = require("v8");

// function Node(val, children) {
//     this.val = val;
//     this.children = children;
//     return { val: this.val, children: this.children };
// };


// var preorder = function (root) {
//     // thisnode = Node(1,[2,3,4,5,null]);
//     let nullcount = 0;
//     let familytree = Node(root[0], []);
//     let val = [];

//     // console.log(Search(root));
//     for (let i = 1; i < root.length; i++) {
//         let temp = root;
//         if (root[i] == null) {
//             val.push(temp.splice(0, i));
//             temp.shift();
//             nullcount++;
            

//             console.log('VAL:',val);
//             console.log('TEMP:',temp);
//         }
//         console.log('-------------------');
//     }

//     return familytree;

// };
// console.log('Family Tree: ', preorder([1, null, 3, 2, 4, null, 5, 6]));

