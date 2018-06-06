// https://github.com/catamphetamine/libphonenumber-js github官网
import { parseNumber, formatNumber, AsYouType } from 'libphonenumber-js'

console.log(parseNumber('8 (800) 555 35 35', 'RU'));
// { country: 'RU', phone: '8005553535' }

formatNumber({ country: 'US', phone: '2133734253' }, 'International')
formatNumber('+12133734253', 'International')
// '+1 213 373 4253'

new AsYouType().input('+12133734')
// '+1 213 373 4'
new AsYouType('US').input('2133734')
// '(213) 373-411'
