import { Node } from './node.js';

function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  const append = (value) => {
    const newNode = Node(value);

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }

    size++;
  };

  const prepend = (value) => {
    const newNode = Node(value, head);
    head = newNode;
    if (!tail) {
      tail = newNode;
    }

    size++;
  };

  const getSize = () => size;
  const getHead = () => head;
  const getTail = () => tail;

  const getNodeAt = (index) => {
    let current = head;
    let count = 0;

    if (!head) return -1;

    while (current !== null) {
      if (count === index) return current.value;
      count++;
      current = current.nextNode;
    }

    return `Index out of bounds`;
  };

  const pop = () => {
    if (!head) return null;

    if (!head.nextNode) {
      const value = head.value;
      head = null;
      tail = null;
      size--;
      return value;
    }

    let previous = head;
    let node = head.nextNode;

    while (node.nextNode) {
      previous = node;
      node = node.nextNode;
    }

    previous.nextNode = null;
    tail = previous;
    size--;
    return node.value;
  };

  const contains = (value) => {
    let node = head;

    while (node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }

    return false;
  };

  const find = (value) => {
    let current = head;
    let index = 0;

    if (!head) return -1;

    while (current !== null) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }

    return null;
  };

  const toString = () => {
    let result = '';
    let current = head;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += 'null';
    return result;
  };
}

export { LinkedList };
