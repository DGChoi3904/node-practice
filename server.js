const mainPage = require('./module/html.js');
console.log(mainPage);

const http = require('http');
const server = http.createServer(function(request, response){
  //로딩단계가 200, 로딩이 끝났을 경우.
  response.statuseCode = 200;
  //헤더를 설정, 컨텐츠 타입을 텍스트/HTML로 지정
  response.setHeader('Content-Type', 'text/html');
  response.write('test');
  response.end(mainPage);

});
//이벤트 리스너 listhen, 매개변수1 - 포트 번호 매개변수2 - 콜백함수, 매개변수로 error를 가지고 올 수 있다.
server.listen( 2080, function(error){
  //만일 에러가 있을 시
  if(error) {
    console.error('서버가 작동하지 않습니다.')
  } else {
    console.log('서버가 작동합니다.')
  }
} );