import { LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('panda');
list.pop();

console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getNodeAt(6));
console.log(list.pop());
console.log(list.getNodeAt(7));
console.log(list.contains('panda'));
console.log(list.contains('snake'));
console.log(list.contains('parrot'));
console.log(list.contains('giraffe'));
console.log(list.find('giraffe'));
console.log(list.find('parrot'));
console.log(list.toString());
