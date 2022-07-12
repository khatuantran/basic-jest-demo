const isNumber = require('../checkNumber/checkNumber')
module.exports = function sum (a, b){
    if(a == null || b == null) return undefined;
    if(!isNumber(a) || !isNumber(b)) return 'Value must be a number';
    else return a + b 
}

