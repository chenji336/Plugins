import { Observable, of, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// 测试Observable是否可以多值传播，这里是可以的
// const observalbe = Observable.create(observer => observer.next(1));
// // 多值传播，类似addEventListen
// observalbe.subscribe(val => {
//     console.log('1:', val);
// });
// observalbe.subscribe(val => {
//     console.log('2:', val);
// });


// var subject = new Subject(); 
var subject = new BehaviorSubject(0);  // 会把最新的值传递给subscribe，可以对比Subject查看输出值
// var subject = new ReplaySubject(3);  // 会把最近三次的值传递给subscribe，可以对比Subject查看输出值
// var subject = new AsyncSubject(); // 要执行里complete才会执行


subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

// behaviorSubject会立刻执行一下，subject不会
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);