/**
 *  @author bishil06 <dlguswp23@gmail.com>
 *  @version 0.1
 *  @file This is LinkedListNode Class script
 */

 /**
  * Class LinkedListNode
  * @class LinkedListNode
  * @classdesc LinkedListNode
  */
class LinkedListNode {
    /**
     * Create LinkedListNode.
     * @param {*} value - The value of the Node, optional param
     * @param {LinkedListNode} nextNode - next node, optional param
     */
    constructor(value, nextNode) {
        this.value = value ? value : null;
        this.nextNode = nextNode ? nextNode : null;
    }

    /**
     * Get value of this node.
     * @return {*} value
     */
    getValue() {
        return this.value;
    }

    /**
     * Set value of this node.
     * @param {*} value - The value of this Node
     */
    setValue(value) {
        this.value = value;
    }

    /**
     * Get next node of this node.
     * @return {LinkedListNode} nextNode
     */
    getNext() {
        return this.nextNode;
    }

    /**
     * Set next node of this node.
     * @param {LinkedListNode} nextNode - The next node of this node
     */
    setNext(nextNode) {
        this.nextNode = nextNode;
    }
}

module.exports = LinkedListNode;