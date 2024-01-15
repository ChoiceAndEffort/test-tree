/*
 * @Author: lg
 * @Date: 2024-01-14 16:14:26
 * @LastEditors: lg
 * @LastEditTime: 2024-01-15 09:22:33
 * @Description:
 * @FilePath: \test-tree\main.ts
 */
class TreeNode {
  public value: number;
  public left?: TreeNode;
  public right?: TreeNode;
  constructor(value: number, left?: TreeNode, right?: TreeNode) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node4 = new TreeNode(4);
const node2 = new TreeNode(2, node4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);
const node5 = new TreeNode(5, node7, node8);
const node6 = new TreeNode(6);
const node3 = new TreeNode(3, node5, node6);
const node1 = new TreeNode(1, node2, node3);
console.log(node1);

console.log('1--------------', JSON.stringify(node1));
console.log('2--------------', JSON.stringify(node1, null, 2));

//广度优先遍历
function bfs(root: TreeNode) {
  const queue = new Array<TreeNode>();
  queue.push(root);
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift()!;
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}
bfs(node1);
