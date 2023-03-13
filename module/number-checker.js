//모듈, 숫자 확인
module.exports = function(data) {
  if(typeof (data) === "number"){
    return true;
  } else {
    return false;
    console.error("이것은 숫자가 아닙니다.");
  }
}