import { interval, range, of } from 'rxjs';
import { concat, take, switchMap, concatMap, mergeMap } from 'rxjs/operators';

// 执行
var timer = interval(1000).pipe(take(4));
var sequence = range(1, 10);
var result = timer.pipe(concat(sequence));
// result.subscribe(x => console.log(x));


// mergeMap
var observable1 = of(1);
var observable2 = of(2);
observable2.subscribe(val => console.log('2:', val));
// val就是http请求后的数据，可以这么使用
observable1.pipe(mergeMap((val) => {
    console.log(val);
    return observable2;
})).subscribe((x) => console.log(x));