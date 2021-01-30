const LinkedListNode = require('./linkedListNode.js');

class LinkedList {
    constructor(iter) {
        this.head = null;
        this.cur = null;
        this.tail = null;
        this.numOfNode = 0;
    }

    getNumOfNode() {
        return this.numOfNode;
    }

    append(value) {
        // 경우의수 2 가지 
        // 1. 처음 추가되는 경우
        // 2. 두번째 이후로 추가되는 경우
        const node = new LinkedListNode(value);

        if (this.head === null) {
            // 처음 추가되는 경우
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.setNext(node);
            this.tail = node;
        }

        this.numOfNode += 1;
    }

    prepend(value) {
        // 경우의수 2가지
        // 1. 처음 추가되는 경우
        // 2. 이미 추가된 노드가 있는 경우
        const node = new LinkedListNode(value, this.head);
        this.head = node;

        if (this.tail === null) {
            /// 처음 추가 되는 경우
            this.tail = node;
        }

        this.numOfNode += 1;
    }

    first() {
        if (this.head === null) {
            return null;
        }

        this.cur = this.head;
        return this.cur.getValue();
    }

    next() {
        if (this.head === null) {
            return null;
        }

        if (this.cur === null) {
            return null;
        }
        this.cur = this.cur.getNext();
        if (this.cur === null) {
            return null;
        }
        else {
            return this.cur.getValue();
        }
    }

    *[Symbol.iterator]() {
        let v = this.first();
        while(v != null) {
            yield v;
            v = this.next();
        }
    }

    delete(value, startNode, compFn) {
        if (this.head === null) {
            return null;
        }

        if (typeof startNode == 'function') {
            compFn = startNode;
            startNode = null;
        }

        let deleteNode = null;
        let curPrevNode = null;

        if (startNode instanceof LinkedListNode) {
            this.cur = startNode;
        }
        else {
            this.cur = this.head;
        }

        let v = this.cur.getValue();

        if (compFn(value, v) === true) {
            this.head = this.cur.getNext();
            if (this.head === null) {
                this.tail = null;
            }
            return v;
        }

        while (v != null) {
            curPrevNode = this.cur;
            this.cur = this.cur.getNext();
            if (this.cur === null) {
                return null;
            }

            v = this.cur.getValue();
            if (compFn(value, v) === true) {
                curPrevNode.setNext(this.cur.getNext());
                return v;
            }
        }
    }

    deleteAll(value, compFn) {
        let lastNode = null;
        while (this.delete(value, lastNode, compFn) != null) {
            lastNode = this.cur.getNext()
        }
    }
}

module.exports = LinkedList;