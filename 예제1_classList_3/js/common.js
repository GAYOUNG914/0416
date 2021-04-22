//classList
function classLeng(){
  let leng = document.querySelector('#text').classlist;//classlist는 배열을 반환한다
  console.log(leng)

  /*contain method classlist에 해당 클래스가 포함되어있는지 여부를 확인하여
  boolean type으로 반환한다*/
  let bulNum = document.querySelector('#text').classList.contains('change_bg');
  console.log(bulNum);
}
