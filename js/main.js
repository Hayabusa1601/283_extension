function get_window_size() {
  let elements = document.getElementsByName('answer');
  let len = elements.length;
  let checkValue = '';

  for(let i = 0; i < len; i++) {
    if(elements.item(i).checked){
      checkValue = elements.item(i).value;
    }
  }//answerグループのうちどれがtrueであるかを確認

  //alert(checkValue);
  return checkValue;//チェックが入ってる値を返す
}

function open_shiny_colors( windowSize, cwidth, cheight ) {
  let width, height;
  
  switch (windowSize) {
    case 'original':
      width = 1148;
      height = 680;
      break;
    case 'big':
      width = 1722;
      height = 1000;
      break;
    case 'small': 
      width = 570;
      height = 353;
      break;
    case 'custom':
      width = cwidth;
      height = cheight;
      break;
    default:
      alert('error!')
      width = 1148;
      height = 680;
      break;
  };//windowSizeの値に応じて縦横比を変更

  /*起動*/ 
  var widowFeatures = 'width=' + width + ',height=' + height;
  //alert('windowFeatures' + widowFeatures);
  window.open("https://shinycolors.enza.fun/", 'shinycolors', widowFeatures);
}

document.getElementById("start_up").onclick = function() {
  var windowSize = get_window_size();// ウィンドウサイズの種類を取得
  
  /*custom縦横比の取得*/ 
  let cwidth = document.getElementById('custom-width');
  let cheight = document.getElementById('custom-height');
  //alert(cheight);
  //alert(cwidth);

  open_shiny_colors(windowSize, cwidth, cheight);//シャニマス起動
};

