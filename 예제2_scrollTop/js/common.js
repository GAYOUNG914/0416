let num = 0; //y축 scroll 변수
let numLeft = 0; //x축 scroll 변수
let elem = document.querySelector("#mydiv");

// y축 scroll 작동
function scrollTopFunc() {
  num = num + 10;
  elem.scrollTop = num;let num = 0; //y축 scroll 변수
  let numLeft = 0; //x축 scroll 변수
  let elem = document.querySelector("#mydiv");

  // y축 scroll 작동
  function scrollTopFunc() {
    num = num + 10;
    elem.scrollTop = num;
    console.log('scroll height:'+elem.scrollHeight+', offset height :'+elem.offsetHeight)
    //offsetHeight : x축 scrollbar track 높이를 포함하여 요소의 높이를 반환한다.
    console.log('scroll width:'+elem.scrollwidth+', offset width :'+elem.offsetWeight)
    //offsetWidth : y축 scrollbar track 높이를 포함하여 요소의 높이를 반환한다.
    // console.log(elem.scrollTop)
    // console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
  }

  function scrollBottomFunc() {
    num = num - 10;
    if (num < 0) {
      num = 0;
    }
    elem.scrollTop = num;
    console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
  }

  // x축 scroll 작동
  function scrollRightFunc() {
    numLeft = numLeft + 10;
    elem.scrollLeft = numLeft;
    console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
  }

  function scrollLeftFunc() {
    numLeft = numLeft - 10;
    if (numLeft < 0) {
      numLeft = 0;
    }
    elem.scrollLeft = numLeft;
    console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
  }


  console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);

  console.log('scroll height:'+elem.scrollHeight)
  // console.log(elem.scrollTop)
  // console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
}

function scrollBottomFunc() {
  num = num - 10;
  if (num < 0) {
    num = 0;
  }
  elem.scrollTop = num;
  console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
}

// x축 scroll 작동
function scrollRightFunc() {
  numLeft = numLeft + 10;
  elem.scrollLeft = numLeft;
  console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
}

function scrollLeftFunc() {
  numLeft = numLeft - 10;
  if (numLeft < 0) {
    numLeft = 0;
  }
  console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
}


console.log("y축 scroll 변수 변화 :" + num + ", x축 scroll 변수 변화 :" + numLeft);
