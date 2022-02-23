class MyNode {
    value: number;
    left: MyNode = null;
    right: MyNode = null;

    constructor(value) {
        this.value = value;
    }

    appendChildNode(childNode: MyNode) {
        if (this.left === null) {
            this.left = childNode;
            return null;
        }

        if (this.right === null) {
            this.right = childNode;
            return null;
        }

        if (this.isChildrenFull) {
            this.left.appendChildNode(childNode);
            return null;
        }
    }

    isChildrenFull(): Boolean {
        return this.left !== null && this.right !== null;
    }

    middleFirstTraverse(cb: Function) {
        cb.call(this, this);
        if (this.left) {
            this.left.middleFirstTraverse(cb);
        }

        if (this.right) {
            this.right.middleFirstTraverse(cb);
        }
    }

    rightFirstTraverse(cb: Function) {

        if (this.right) {
            this.right.rightFirstTraverse(cb);
        }

        if (this.left) {
            this.left.rightFirstTraverse(cb);
        }

        cb.call(this, this);
    }
}

class MyTree {
    head: MyNode = null;
    constructor(head?: MyNode) {
        this.head = head;
    }
}

const nodesArr = [1,2,3,4,5,6].map(v => {
    return new MyNode(v);
});

const head = nodesArr[0];

const tree = new MyTree(head);
nodesArr.forEach((e, idx) => {
    if (idx !== 0) {
        head.appendChildNode(e);
    }
});

// nodesArr[1].middleFirstTraverse((n: MyNode) => {
//     console.log(n.value);
// });

// head.rightFirstTraverse((n: MyNode) => {
//     console.log(n.value);
// });