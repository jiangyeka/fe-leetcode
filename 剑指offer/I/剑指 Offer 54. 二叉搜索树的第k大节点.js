/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargest = function (root, k) {
  let i = 0
  let ans
  const dfs = (root) => {
    if (!root)
      return
    dfs(root.right)
    i++
    if (i === k)
      ans = root.val
    dfs(root.left)
  }
  dfs(root)
  return ans
}
