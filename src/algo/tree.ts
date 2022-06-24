
/**
 * 1. 添加节点
 * 2. 遍历共五种：前中后序 & BFS & DFS
 */
class MyNode {
    value: number;
    left: MyNode;
    right: MyNode;

    count?: number;
    
    constructor(value) {
        this.value = value;
    }

    appendChildNode(childNode: MyNode) {
        const supArr: MyNode[] = [];
        supArr.push(this);
        while (supArr[0].left && supArr[0].right) {
            supArr.push(supArr[0].left, supArr[0].right);
            supArr.shift();
        }

        if (supArr[0].left === undefined) {
            supArr[0].left = childNode;
            return null;
        }
        if (supArr[0].right === undefined) {
            supArr[0].right = childNode;
            return null;
        }
    }

    bfs(cb: Function): MyNode[] {
        const childrenNodes: MyNode[] = [];
        const supArr = [];
        supArr.push(this);

        while (supArr.length) {
            const removedNode = supArr.shift();
            if (removedNode) {
                cb.call(this, removedNode);
                childrenNodes.push(removedNode);

                supArr.push(removedNode.left, removedNode.right);
            }
        }
        return childrenNodes;
    }

    dfs(cb: Function): MyNode[] {
        const childrenNodes: MyNode[] = [];

        const recursor = (node: MyNode) => {
            cb.call(this, node);
            childrenNodes.push(node);
1
            if (node.left) {
                recursor(node.left)
            }
            if (node.right) {
                recursor(node.right)
            }
        }

        recursor(this);

        return childrenNodes;
    }

    // pre-order <=> self, left, right
    // inorder <=> left, self, right
    // post-order <=> left, right, self
    middleFirstTraverse(cb: Function) {
        cb.call(this, this);

        if (this.left) { this.left.middleFirstTraverse(cb); }

        if (this.right) { this.right.middleFirstTraverse(cb); }
    }

    rightFirstTraverse(cb: Function) {
        if (this.right) { this.right.rightFirstTraverse(cb); }

        if (this.left) { this.left.rightFirstTraverse(cb); }

        cb.call(this, this);
    }
}

/**
 * Unit Test
 */

const nodesArr = [1,2,3,4,5,6].map(v => {
    return new MyNode(v);
});

const head = nodesArr[0];

nodesArr.forEach((e, idx) => {
    if (idx !== 0) {
        head.appendChildNode(e);
    }
});

// Tree build
// head.bfs((n) => {
//     let tempRef;
//     tempRef = n.left;
//     n.left = n.right;
//     n.right = tempRef
// });
head.rightFirstTraverse((node: MyNode) => {
    // 左右都有
    if (node.left && node.right) {
        const leftCount = node.left?.count || 0;
        const rightCount = node.right?.count || 0;
        node.count = leftCount + rightCount + 1
    }
    // 左右都没有
    else if (!node.left && !node.right) {
        node.count = 1
    }
    // 左右只有一个
    else {
        const childCount = node.left?.count || node.right?.count;
        node.count = 1 + childCount
    }
})

console.log(head);

// middleFirst/inorder Traverse
/* nodesArr[1].middleFirstTraverse((n: MyNode) => {
    console.log(n.value);
}); */

// rightFirst
/* head.rightFirstTraverse((n: MyNode) => {
    console.log(n.value);
}); */

// BFS (Breadth First Search)
/* const bfsChildrenNodes = head.bfs((node: MyNode) => {
    console.log(node.value);
});
console.log('bfs result', bfsChildrenNodes); */

// DFS (Deapth First Search)
/* const dfsChildrenNodes = head.dfs((node: MyNode) => {
    console.log(node.value);
});
console.log('dfs result', dfsChildrenNodes); */