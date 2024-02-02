"use strict";
class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new SLLNode(val);
        if (!this.head) {
            this.head = this.tail;
        }
        else {
        }
        // Logic here
        return this;
    }
    pop() {
        var current = this.head;
        // Logic here
        return current;
    }
    shift() {
        var currentHead = this.head;
        // Logic here
        return currentHead;
    }
    unshift(val) {
        var newNode = new SLLNode(val);
        // Logic here
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        var current = this.head;
        // Logic here
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        // Logic here
        return false;
    }
    insert(index, val) {
        // Logic here
        return true;
    }
    // declare return type
    remove(index) {
        // Logic here
        //
        // return removed node
    }
    reverse() {
        // Logic here
        return this;
    }
    print() {
        var arr = [];
        // Logic here
        console.log(arr);
    }
}
