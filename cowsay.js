// or cowsay.think()
const cowsay = require("cowsay");
// 라이브러리를 require로 가져온다.
//일종의 #include < >로 보면 된다.

console.log(
  cowsay.say({
    text: "역배들, 정신이 들어?",
    e: "^ ^",
    T: "ㅠ ",
  })
);

require("dotenv").config();
console.log(process.env.SECRET_KEY); // remove this after you've confirmed it working
