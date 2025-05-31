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

    const prepend = (value) => {
        const newNode = Node(value, head);
        head = newNode;
         if (!tail) {
            tail = newNode;
        }

        size++;
    }

    
}

export { LinkedList };