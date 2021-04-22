// attribute
let inputNum = prompt('숫자를 입력해주세요.','숫자');
console.log(inputNum);
let num = Math.random()*10 + 1;//random : 반환하는 값은 0~1미만,0 ~ 0.9999
num = Math.floor(num);//소수점 아래 버림
console.log(num)
// num = Math.ceil(num);//소수점 아래 올림
// console.log(num)
// num = Math.round(num);//소수점 아래 반올림
// console.log(num)
function changeColor(){
  document.querySelectorAll('div')[num-1].setAttribute('class','selected');
  t = setTimeout(timeFunc,2000);
  function timeFunc(){
    if( inputNum == num ){
      alert('입력하신 번호는'+inputNum+'이고, 당첨번호는'+num+'입니다. \n축하합니다!! \n이벤트에 당첨 되었습니다.!!');
    }else{
      alert('입력하신 번호는'+inputNum+'이고, 당첨번호는'+num+'입니다. \n이벤트에 당첨 되지않았습니다. \n다음 기회에 도전해보세요!!');
    }
  }
}

function reset(){
  document.querySelectorAll('div')[num-1].removeAttribute('class');
}
