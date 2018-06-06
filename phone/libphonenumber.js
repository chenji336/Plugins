// https://github.com/catamphetamine/libphonenumber-js github官网
// babel-node phone/libphonenumber.js
import {
    parseNumber,
    formatNumber,
    isValidNumber,
    getNumberType,
    AsYouType
  } from 'libphonenumber-js/custom'
  
  import metadata from 'libphonenumber-js/metadata.full.json'
  
  
  console.log(isValidNumber({ phone: '18503007521', country: 'CN' }, metadata));

