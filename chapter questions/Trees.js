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


// Validate Binary Search Tree
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
    if(!root) 
        return true
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    
    function dfs(root, min, max){
        if(!root) 
            return true
        if(root.val <= min || root.val >= max)
            return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
};



 var isValidBST = function(root) {

    let result=true;
    let r=0,l=0;
    return function validBST(root){
    
        if (root != null&&root.right !=null){
            r++;
            console.log('right: '+r);
            
            if(root.val >=root.right.val){
                result= false;
                return false;
    
            }    
    
            else {
                if(root.right.left !=null){
                    
                    if (root.val >=root.right.left.val) {
                        console.log('right left < grandpa');
                        result= false;
                        return false;
    
                        
                    }
                }
                // isValidBST(root.left);
                validBST(root.right);     
            }
    
    
        }
        if (root != null&&root.left!=null){
            l++;
            console.log('left: '+l);
            if(root.val <= root.left.val) return result= false;
            else {
                if(root.left.right!=null){
                    if(root.val<=root.left.right.val) {
                        console.log('left right > grandpa');
                        result = false;
                        console.log('result: '+result);
                        return false;
    
                    }
                }
                validBST(root.left);
            }
            
        }
        return result;
    }
    
    
    };



    //OR
    var isValidBST = function(root) {
        let prev;
            return function sBSTUtil(root){
            
                 if (root != null)
                        {
                            if (!isBSTUtil(root.left))
                                return false;
        
                            // Allows only distinct valued nodes
                            if (prev != null && root.data <= prev.data)
                                return false;
        
                            prev = root;
        
                            return isBSTUtil(root.right);
                        }
                        return true;
        
            }
            
            
            };