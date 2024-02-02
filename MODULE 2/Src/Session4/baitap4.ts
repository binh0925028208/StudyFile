type NodeType = string | number | null;

class SLLNode {
  private val: NodeType;
  private next: NodeType;
  constructor(val: NodeType) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: NodeType;
  private tail: NodeType;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  private push(val: NodeType): SinglyLinkedList {
    var newNode = new SLLNode(val);

    if (!this.head) {
      this.head = this.tail;
    } else {
    }

    // Logic here

    return this;
  }

  private pop(): NodeType {
    var current = this.head;
    // Logic here

    return current;
  }
  private shift() {
    var currentHead = this.head;
    // Logic here

    return currentHead;
  }
  private unshift(val: NodeType): SinglyLinkedList {
    var newNode = new SLLNode(val);
    // Logic here

    return this;
  }
  private get(index: number): NodeType {
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    // Logic here

    return current;
  }
  private set(index: number, val: NodeType): boolean {
    var foundNode = this.get(index);
    // Logic here

    return false;
  }
  private insert(index: number, val: NodeType): boolean {
    // Logic here

    return true;
  }
  // declare return type
  private remove(index: number) {
    // Logic here
    //
    // return removed node
  }
  private reverse(): SinglyLinkedList {
    // Logic here

    return this;
  }
  private print(): void {
    var arr: SLLNode[] = [];
    // Logic here

    console.log(arr);
  }
}
