/* eslint-disable */
import { StackList, StackArray }from './stacks';
import { QueueList, QueueArray } from './queues';

export const isBalanced = x => {
    let s = new StackList();
    const open = ['(', '[', '{']
    const closed = [')', ']', '}', "'", '"'];
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if(closed.indexOf(x[i]) > 2) {
            let topQuote = s.peek()
            if(s.top !== x[i] && count === 0) {
                s.push(x[i])
                count++
                continue
            }
            else if (topQuote === x[i] && count) {
                s.pop();
                continue
            }
        }
        if (open.indexOf(x[i]) !== - 1) {
            s.push(x[i]);
        }
        if (closed.indexOf(x[i]) > - 1 && closed.indexOf(x[i]) < 3 ){
            let topParen = s.peek();
            if (open.indexOf(topParen) === closed.indexOf(x[i])) {
                s.pop();
            }
            else {
                s.display()
            }
        }
    }
    s.display()
  return s.top ? false : true;
}

const bankDisplay = q => {
        q.display();
    }
const delay = time => new Promise(r => setTimeout(r, time));

export async function bank(input) {
    const bankQ = new QueueList();
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        bankQ.enqueue(input[i])
    }
    while(counter < 10){
        let personAtFront = bankQ.dequeue();
        let num = Math.floor(Math.random() * 3);
        if (num === 1) {
            bankQ.enqueue(personAtFront);
        }
        await delay(5000);
        bankQ.display();
        counter++
    }

}

export const isPalindrome = x => {
    const s = new StackList();
    const str = x.toLowerCase().replace(/([^a-z])/g, '');
    for (let i = 0; i < str.length; i++) {
        s.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        let letter = s.pop();
        if (letter !== str[i]){
            return false
        }
    }
    return true
}

export const hasTwo = x => {
    const str = x.toLowerCase();
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return true
        }
    }
    return false
}
