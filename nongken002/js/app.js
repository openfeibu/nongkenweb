(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);
function $(id) {
    return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function () {
    var titles=$('notice-tit').getElementsByTagName('li');
    divs=$('notice-con').getElementsByTagName('div');
    if (titles.length!=divs.length)
        return;
    for (var i=0;i<=titles.length;i++) {
        titles[i].id=i;
        titles[i].onclick=function () {
            for (var j=0;j<titles.length;j++) {
                titles[j].className='';
                divs[j].style.display='none';
            }
            this.className='active';
            divs[this.id].style.display='block';
        }
    }
}