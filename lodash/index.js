// import _ from 'lodash'; // 使用起来需要babel-node（如果没有用到es6，可以使用require,也更快）
const _ = require('lodash');

// 前面覆盖后面的
// console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

// 多少次之后执行一次里面的内容
var n =2; // 两个done()才会执行一次
var done = _.after(n, function () {
    console.log('done saving!');
});
done();
done();

