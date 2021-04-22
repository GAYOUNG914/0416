/*chatting*/
function chattingFunc(e){
  console.log(e.previousElementSibling.value)
  //e.classList.add('hi')
  let elem = document.querySelectorAll('.chat_box');
  let inpuTxt = e.previousElementSibling.value;
  let htmlTxt = '';
  htmlTxt = elem[0].innerHTML;
  htmlTxt += '<div class="line char_a right"><div class="txt">'+inpuTxt+'</div></div>';
  elem[0].innerHTML = htmlTxt;
}
