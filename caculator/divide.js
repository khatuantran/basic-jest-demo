const isNumber = require('../checkNumber/checkNumber')
module.exports = function divide(a, b){
    if(a == null || b == null) return undefined;
    else if(!isNumber(a) || !isNumber(b)) return 'Value must be a number';
    else if(b==0) return 'Divide by zero'
    else return a/b 
}
