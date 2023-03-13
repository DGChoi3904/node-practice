const numberChecker =  require("./number-checker.js");
module.exports = {
  add : function(first, second) {
    if(numberChecker(first) === true && numberChecker(second) === true) {
      return first + second;  
    }
    
  }
}