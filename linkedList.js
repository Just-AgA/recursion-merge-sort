import { Node } from "./node.js";

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
    }

    
}

export { LinkedList };