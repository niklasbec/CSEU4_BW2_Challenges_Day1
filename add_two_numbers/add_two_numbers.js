class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let l1 = {}
l1.head = new LinkedListNode(2)
l1.head.next = new LinkedListNode(4)
l1.head.next.next = new LinkedListNode(3)

let l2 = {}
l2.head = new LinkedListNode(5)
l2.head.next = new LinkedListNode(6)
l2.head.next.next = new LinkedListNode(4)

var addTwoNumbers = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    let total1 = ""
    let total2 = ""
    let total = 0
    let currentL1 = l1.head;

    while (currentL1 !== null) {
        arr1.unshift(currentL1.data)
        currentL1 = currentL1.next;
    }

    let currentL2 = l2.head;

    while (currentL2 !== null) {
        arr2.unshift(currentL2.data)
        currentL2 = currentL2.next;
    }

    arr1.forEach(curr => {
        total1 = total1 + curr.toString()
    })
    arr2.forEach(curr => {
        total2 = total2 + curr.toString()
    })

    total = Number(total1) + Number(total2)

    return total
};

console.log(addTwoNumbers(l1, l2))