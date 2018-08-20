// babel-node 02.rxjs-observable.js
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000).pipe(
    take(5)
);
// Subscribe to begin publishing values
secondsCounter.subscribe(n =>
    console.log(`It's been ${n} seconds since subscribing!`));