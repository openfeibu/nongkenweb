$(function(){

    var  strategy = $('.strategy li');
  	var strategy_detail = $('.strategy-detail li');

    // console.log(caseItem);
    //切换标签
  	strategy.click(function(){
  			var index = $(this).index();
  			// console.log(index);
  			// console.log(this);
  			$(this).find('a').addClass('strategy-act').parent('li').siblings().find('a').removeClass('strategy-act');
  			strategy_detail.eq(index).addClass('strategy-detail-show').siblings().removeClass('strategy-detail-show');
  	})

})