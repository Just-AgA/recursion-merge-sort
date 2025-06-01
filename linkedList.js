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

    const getSize = () => size;
    const getHead = () => head;
    const getTail = () => tail;

    const getNodeAt = index => {

        let current = head;
        let count = 0;

        if(!head) return -1;

        while(current !== null){
            if(count === index) return current.value;
            count++;
            current = current.nextNode;
        }

        return `Index out of bounds`;
    }

    
}

export { LinkedList };