// babel-node 03.operators.js
import { of, pipe, Observable, timer } from 'rxjs';
import { map, filter, catchError, publish } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// 简单的operator操作，不使用pipe（这个有点不习惯，不过确实是最初的样子）
function simpleOperate() {
    const nums = of(1, 2, 3);
    console.log(nums);

    const squareValues = map(val => val * val);
    const squaredNums = squareValues(nums);
    // const squaredNums = squareValues([1,2,3]); // 换成这种就有问题
    // const squaredNums = nums.pipe(squareValues); // 使用这种和正确的等价，这样就好理解了，在进行next操作的时候通过了map操作

    squaredNums.subscribe(x => console.log(x));
}
// simpleOperate();

// 使用pipe，不过顺序还是倒着
function pipeOperate() {
    const nums = of(1, 2, 3, 4, 5);

    const squareOddVals = pipe(
        filter(n => n % 2),
        map(n => n * n)
    );

    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => console.log(x));
}
// pipeOperate();

// 其实Observable.pipe，默认带的
// 也是我们最常用的方式
function pipeFavorOperate() {
    const nums = of(1, 2, 3, 4, 5);

    const squareOdd = nums.pipe(
        filter(n => n % 2),
        map(n => n * n)
    );
    squareOdd.subscribe(x => console.log(x));
}
// pipeFavorOperate();

// 错误处理
function error() {
    
    // Return "response" from the API. If an error happens,
    // return an empty array.
    const apiData = ajax('/api/data').pipe(
        map(res => {
            console.log(res);
            if (!res.response) {
                throw new Error('Value expected!');
            }
            return res.response;
        }),
        catchError(err => of([])) // 可以注释掉查看效果
    );

    apiData.subscribe({
        next(x) { console.log('data: ', x); },
        error(err) { console.log('errors already caught... will not run'); }
    });
}
// error();

// 执行connect之后才发送数据
function cold2hot() {
    const hot = Observable.create((observer) => {
       console.log('observer start');
       observer.complete();
    }).pipe(publish());
    console.log('start');
    hot.subscribe();
    hot.connect();
    console.log('after observalbe has been suscribed');
    // hot.connect(); // 只会执行最后的connect，放在之里，那么顺序会改变
}
// cold2hot();

