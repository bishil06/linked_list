const LinkedListNode = require('../linkedListNode.js');

describe('linkedListNode', () => {
    test('should create empty linkedListNode', () => {
        const newNode = new LinkedListNode();

        expect(newNode.value).toBeNull();
        expect(newNode.nextNode).toBeNull();
    });

    test('should create linkedListNode', () => {
        const newNode = new LinkedListNode(1);
        expect(newNode.value).toBe(1);
        expect(newNode.nextNode).toBeNull();
    });

    test('should create linkedListNode with link', () => {
        const newNode1 = new LinkedListNode(1);
        const newNode2 = new LinkedListNode(2, newNode1);
        
        expect(newNode1.nextNode).toBeDefined();
        expect(newNode1.nextNode).toBeNull();
        expect(newNode2.value).toBe(2);
        expect(newNode2.nextNode.value).toBe(1);
    });

    test('should getValue linkedListNode', () => {
        const newNode = new LinkedListNode(1);
        expect(newNode.getValue()).toBe(1);
    });

    test('should setValue linkedListNode', () => {
        const newNode = new LinkedListNode(1);
        newNode.setValue(5);
        expect(newNode.getValue()).toBe(5);
    });

    test('should setValue linkedListNode', () => {
        const newNode = new LinkedListNode(1);
        newNode.setValue(5);
        expect(newNode.getValue()).toBe(5);
    });

    test('should getNext linkedListNode', () => {
        const newNode1 = new LinkedListNode(1);
        const newNode2 = new LinkedListNode(2, newNode1);

        expect(newNode2.getNext().getValue()).toBe(1);
    });

    test('should setNext linkedListNode', () => {
        const newNode1 = new LinkedListNode(1);
        const newNode2 = new LinkedListNode(2);

        newNode2.setNext(newNode1);
        expect(newNode2.getNext().getValue()).toBe(1);
    });

    test('should obj setValue linkedListNode', () => {
        const newNode = new LinkedListNode({'key' : 100});

        expect(newNode.getValue().key).toBe(100);
    });
})