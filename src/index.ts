import { NumbersCollection } from './CollectionTypes/NumbersCollection';
import { CharactersCollection } from './CollectionTypes/CharactersCollection';
import { LinkedList } from './CollectionTypes/LinkedList';

const numbers = new NumbersCollection([1, 20 ,12, -30])
console.log('sorting... ' + numbers.data);
numbers.sort();
console.log('resulting in... ' + numbers.data + '\n');

const chars = new CharactersCollection('xAayB');
console.log('sorting... ' + chars.data);
chars.sort();
console.log('resulting in... ' + chars.data + '\n');

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(1);
linkedList.add(-10);
linkedList.add(500);
console.log('sorting...');
linkedList.print()
linkedList.sort()
console.log('resulting in...');
linkedList.print()