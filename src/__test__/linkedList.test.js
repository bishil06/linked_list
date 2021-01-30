const LinkedList = require('../linkedList.js');

describe('linkedList', () => {
    test('should create empty linkedList', () => {
        const newLList = new LinkedList();

        expect(newLList.head).toBeDefined();
        expect(newLList.head).toBeNull();
        expect(newLList.cur).toBeDefined();
        expect(newLList.cur).toBeNull();
        expect(newLList.tail).toBeDefined();
        expect(newLList.tail).toBeNull();
        expect(newLList.numOfNode).toBeDefined();
        expect(newLList.numOfNode).toBe(0);
    });

    test('should getNumOfNode empty linkedList', () => {
        const newLList = new LinkedList();
        
        expect(newLList.getNumOfNode()).toBe(0);
    })

    test('should append linkedList', () => {
        const newLList = new LinkedList();

        newLList.append(10)
        expect(newLList.getNumOfNode()).toBe(1);
        expect(newLList.head.getValue()).toBe(10);
        expect(newLList.tail.getValue()).toBe(10);

        newLList.append(20)
        expect(newLList.getNumOfNode()).toBe(2);
        expect(newLList.head.getValue()).toBe(10);
        expect(newLList.tail.getValue()).toBe(20);
        
        newLList.append(30)
        expect(newLList.getNumOfNode()).toBe(3);
        expect(newLList.head.getValue()).toBe(10);
        expect(newLList.tail.getValue()).toBe(30);
    });

    test('should prepend linkedList', () => {
        const newLList = new LinkedList();

        newLList.prepend(10)
        expect(newLList.numOfNode).toBe(1);
        expect(newLList.head.getValue()).toBe(10);
        expect(newLList.tail.getValue()).toBe(10);

        newLList.prepend(20)
        expect(newLList.numOfNode).toBe(2);
        expect(newLList.head.getValue()).toBe(20);
        expect(newLList.tail.getValue()).toBe(10);

        newLList.prepend(30)
        expect(newLList.numOfNode).toBe(3);
        expect(newLList.head.getValue()).toBe(30);
        expect(newLList.tail.getValue()).toBe(10);
    });

    test('should first empty linkedList', () => {
        const newLList = new LinkedList();

        expect(newLList.first()).toBeNull();
    });

    test('should first inkedList', () => {
        const newLList = new LinkedList();

        newLList.append(10);
        newLList.append(20);
        newLList.append(30);
        expect(newLList.first()).toBe(10);
    });

    test('should nextNode is null inkedList', () => {
        const newLList = new LinkedList();

        expect(newLList.next()).toBeNull();

        newLList.append(10);
        expect(newLList.first()).toBe(10);
        expect(newLList.next()).toBeNull();
    });

    test('should next inkedList', () => {
        const newLList = new LinkedList();

        newLList.append(10);
        expect(newLList.first()).toBe(10);

        newLList.append(20);
        newLList.append(30);
        newLList.append(40);
        newLList.append(50);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(30);
        expect(newLList.next()).toBe(40);
        expect(newLList.next()).toBe(50);

        newLList.prepend(1);
        newLList.prepend(2);
        newLList.prepend(3);
        expect(newLList.next()).toBeNull();

        expect(newLList.first()).toBe(3);
        expect(newLList.next()).toBe(2);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(10);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(30);
        expect(newLList.next()).toBe(40);
        expect(newLList.next()).toBe(50);
        expect(newLList.next()).toBeNull();
        expect(newLList.next()).toBeNull();
    });

    test('should iterate empty linkedList', () => {
        const newLList = new LinkedList();

        for(const v of newLList) {
            expect(v).toBeNull();
        }
    });

    test('should iterate linkedList', () => {
        const newLList = new LinkedList();

        for(let i=1; i<=10; i++) {
            newLList.append(i);
        }

        let testI = 0;
        for(const v of newLList) {
            testI += 1
            expect(v).toBe(testI);
        }
    });

    test('should delete empty linkedList', () => {
        const newLList = new LinkedList();

        expect(newLList.delete(999, (a, b) => a === b)).toBeNull();
    });

    test('should delete 1 node linkedList', () => {
        const newLList = new LinkedList();

        newLList.append(10)
        expect(newLList.delete(10, (a, b) => a === b)).toBe(10);
        expect(newLList.head).toBeNull();
        expect(newLList.tail).toBeNull();
    });

    test('should delete linkedList', () => {
        const newLList = new LinkedList();

        newLList.append(1)
        newLList.append(10)
        newLList.append(20)
        newLList.append(30)
        newLList.append(40)
        expect(newLList.delete(1, (a, b) => a === b)).toBe(1);
        expect(newLList.first()).toBe(10);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(30);
        expect(newLList.next()).toBe(40);
        expect(newLList.delete(30, (a, b) => a === b)).toBe(30);
        expect(newLList.first()).toBe(10);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(40);
        newLList.prepend(1);
        newLList.prepend(2);
        newLList.prepend(3);
        expect(newLList.delete(2, (a, b) => a === b)).toBe(2);
        expect(newLList.delete(20, (a, b) => a === b)).toBe(20);
        expect(newLList.first()).toBe(3);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(10);
        expect(newLList.next()).toBe(40);
    });

    test('should dont delte linkedList', () => {
        const newLList = new LinkedList();

        newLList.append(10);
        newLList.append(20);
        newLList.append(30);
        expect(newLList.delete(999, (a, b) => a === b)).toBeNull();
    });

    test('should delteAll empty linkedList', () => {
        const newLList = new LinkedList();

        expect(newLList.delete(999, (a, b) => a === b)).toBeNull();
    });

    test('should deleteAll linkedList', () => {
        const newLList = new LinkedList();
        
        for(let i=0; i<5; i++) {
            newLList.append(1);
        }
        newLList.append(10);
        newLList.append(20);
        newLList.append(30);

        expect(newLList.first()).toBe(1);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(1);
        expect(newLList.next()).toBe(10);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(30);

        newLList.deleteAll(1, (a, b) => a === b);
        expect(newLList.first()).toBe(10);
        expect(newLList.next()).toBe(20);
        expect(newLList.next()).toBe(30);
        
        const newLList2 = new LinkedList();
        for(let i=1; i<=10; i++) {
            newLList2.append(i);
        }
        newLList2.deleteAll(2, (two, b) => b%two==0);
        expect(newLList2.first()).toBe(1);
        expect(newLList2.next()).toBe(3);
        expect(newLList2.next()).toBe(5);
        expect(newLList2.next()).toBe(7);
        expect(newLList2.next()).toBe(9);
    });
});