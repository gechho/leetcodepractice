//Maximum Depth of Binary Tree
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root == null){      
       return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//Validate Binary Search Tree
/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let rootval=0;
    if (root != null&&root.right !=null){
        
        if(root.val >=root.right.val)    return false;

        else {
            if(root.right.left !=null){
                if (root.val >=root.right.left.val) {
                    console.log('right left < grandpa');
                    return false;
                }
            }
            // isValidBST(root.left);
            isValidBST(root.right);     
        }

        return true;
    }
    if (root != null&&root.left!=null){
        if(root.val <= root.left.val) return false;
        else {
            if(root.left.right!=null){
                if(root.val<=root.left.right.val) {
                    console.log('left right > grandpa');
                    return false;
                }
            }
            isValidBST(root.left);
        }
        return true;
    }
    else return true


};