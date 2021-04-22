// classList
let classListNum = document.querySelector("#text").classList;
// class 단일추가
// classListNum.add('change_width');
// classListNum.add('change_bg');
// classListNum.add('change_font_style');

// 다중추가
// classListNum.add('change_width','change_bg','change_font_style');
// 다중삭제
// classListNum.remove('change_width','change_bg','change_font_style');


function textFunc(){
  // classListNum.remove('change_width','change_bg','change_font_style');
  classListNum.toggle('change_width');
}
