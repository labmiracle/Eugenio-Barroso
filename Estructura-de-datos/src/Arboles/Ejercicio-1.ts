class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    let isFound = false;
    while (!isFound) {
      if (current.value === value) {
        isFound = true;
        return undefined;
      }
      if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          isFound = true;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          isFound = true;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  inOrderTraversal(node: TreeNode<T> | null): T[] {
    const ValuesInOrder: T[] = [];
    const sortValues = (node: TreeNode<T> | null) => {
      if (node === null) {
        return;
      }

      sortValues(node.left);
      ValuesInOrder.push(node.value);
      sortValues(node.right);
    };
    return ValuesInOrder;
  }

  preOrderTraversal(node: TreeNode<T> | null): T[] {
    const nodeValuesInOrder: T[] = [];

    const sortValues = (node: TreeNode<T> | null) => {
      if (node === null) {
        return;
      }

      nodeValuesInOrder.push(node.value);
      sortValues(node.left);
      sortValues(node.right);
    };

    sortValues(this.root);
    return nodeValuesInOrder;
  }

  postOrderTraversal(node: TreeNode<T> | null): T[] {
    const nodeValuesInOrder: T[] = [];

    const sortValues = (node: TreeNode<T> | null) => {
      if (node === null) {
        return;
      }

      sortValues(node.left);
      sortValues(node.right);
      nodeValuesInOrder.push(node.value);
    };

    sortValues(this.root);
    return nodeValuesInOrder;
  }

  GetSize(node: TreeNode<T> | null): number {
    if (!node) return 0;
    return 1 + this.GetSize(node.left) + this.GetSize(node.right);
  }

  findMin(node: TreeNode<T> | null): T | null {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  findMax(node: TreeNode<T> | null): T | null {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(7);
console.log("Recorrido en orden:");
binaryTree.inOrderTraversal(binaryTree.root);
console.log(
  "Número de elementos en el árbol:",
  binaryTree.GetSize(binaryTree.root)
);
console.log("Valor mínimo en el árbol:", binaryTree.findMin(binaryTree.root));
console.log("Valor máximo en el árbol:", binaryTree.findMax(binaryTree.root));
