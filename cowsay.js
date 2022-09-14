// //console.log('hello nodejs');

// // or cowsay.think()

const cowsay = require('cowsay');
// 라이브러리를 require로 가져온다.

console.log(
  cowsay.say({
    text: '역배들, 정신이 들어?',
    e: '^ ^',
    T: 'ㅠ ',
  }),
);
