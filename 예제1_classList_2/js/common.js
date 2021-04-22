// classList
// sidemenuslide
// function sidemenuSlide(){
//   document.querySelector('#sidemenu').classList.add('on');
// }


/*버튼 두개로 인터렉션 구현하기*/
// function sidemenuSlideAdd(){
//   document.querySelector('#sidemenu').classList.add('on');
// }
//
// function sidemenuSlideRemove(){
//   document.querySelector('#sidemenu').classList.remove('on');
// }

/*class list toggle로 인터렉션 구현하기*/
// function sidemenuSlideToggle(){
//   document.querySelector('#sidemenu').classList.toggle('on');
// }

/*class check if 구문으로 인터렉션 구현하기*/
function sidemenuSlide(){
  let classNum = document.querySelector('#sidemenu').classList;
//   let classAttrNum = document.querySelector('#sidemenu').getAttribute('class');
//   if( classAttrNum == "on" ){//on일때
//     //on class 삭제
//     classNum.remove('on');
//     console.log(classAttrNum);
//   }else{//on이 아닐때
//     //on class 추가
//     classNum.add('on');
//     console.log('class가 없습니다.');
//   }
}

function classLeng(){
  let leng = document.querySelector('#sidemenu').classlist;//classlist는 배열을 반환한다
  console.log(leng)

  /*contain method classlist에 해당 클래스가 포함되어있는지 여부를 확인하여
  boolean type으로 반환한다*/
  let bulNum = document.querySelector('#sidemenu').classList.contains('change_bg');
  console.log(bulNum);
}
