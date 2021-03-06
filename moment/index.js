const moment = require('moment');
// http://momentjs.cn/docs/
console.log(moment(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log(moment(+(new Date()), 'YYYY-MM-DD HH:mm:ss'));
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
console.log(moment('2018-10-10 12').diff(moment('2018-10-10 10'), 'hours')); //years days minutes
console.log(moment('2018-10-10 12').add(0, 'hours').format('YYYY-MM-DD HH'));
console.log(moment().isBefore('2018-10-10 12')); // 比较
console.log(+moment()); // 时间戳
