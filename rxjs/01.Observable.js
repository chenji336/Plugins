// babel-node 01.Observable.js

// es6支持的 这一章主要就是为了理解原生的Observalbe，下面的都是比较衍生
const myObservable = Observable.of(1, 2, 3);

// 使用require
/* const { Observable, of } = require('rxjs');
const myObservable = of(1, 2, 3); */

// 使用import
/* import { Observable, of } from 'rxjs';

const myObservable = of(1, 2, 3); */

// *****of进行拆分******
function sequenceSubscriber(observer) {
    observer.next(1); // 触发
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return { unsubscribe() { } };
}
const sequence = new Observable(sequenceSubscriber);
// *****拆分完成****************

// Create observer object
// next是必须的，其他两个都可以不写
const myObserver = {
    next: x => console.log('Observer got a next value: ' + x), // 就算没有key也是可以的。等价 x => console.log('Observer got a next value: ' + x)
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);
sequence.subscribe(myObserver); // 等价myObservable.subscribe(myObserver);