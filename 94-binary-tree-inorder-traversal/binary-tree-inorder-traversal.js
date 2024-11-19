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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
     function inorder(node=root,data=[]){
        if(node===null) return data;
        inorder(node.left,data);
        data.push(node.val);
        inorder(node.right,data);
        return data
    }
    return inorder(root)
};