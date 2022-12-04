class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.storage[this.rear] = val;
    this.rear++;
  }

  dequeue() {
    if (this.front === this.rear) return;

    const ret = this.storage[this.front++];
    return ret;
  }

  size() {
    return this.rear - this.front;
  }
}

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  const ret = [];
  const queue = new Queue();

  queue.enqueue(node);

  while (queue.size()) {
    const cur_node = queue.dequeue();
    ret.push(cur_node.value);
    cur_node.children.forEach((el) => queue.enqueue(el));
  }

  return ret;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};