const isNumber = require('../checkNumber/checkNumber')
module.exports = function multiply(a, b){
    if(a == null || b == null) return undefined;
    if(!isNumber(a) || !isNumber(b)) return 'Value must be a number';
    else return a*b
}