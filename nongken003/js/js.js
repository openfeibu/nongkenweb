function tab(){
	var oDiv=document.getElementById('news');
	var aBtn=oDiv.getElementsByTagName('li');
	var aCont=oDiv.getElementsByTagName('div');

	for( var i=0; i<aBtn.length;i++)
	{
		aBtn[i].index=i;//索引，找出现在的btn是index里的第几个


		aBtn[i].onclick=function()
		{   
			for( var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
				aCont[i].style.display='none';
			}
			this.className='act';
			aCont[this.index].style.display='block';
		}
	} 
}
function choose(){
	var oDiv1=document.getElementById('four')
	var aBtn1=oDiv1.getElementsByTagName('li')
	for( var i=0; i<aBtn1.length;i++)
	{
		aBtn1[i].index=i;//索引，找出现在的btn是index里的第几个

		aBtn1[i].onclick=function()
		{   
			for( var i=0;i<aBtn1.length;i++)
			{
				aBtn1[i].className='';
			}
			this.className='active';
		}
	} 
}
window.onload=function(){
	choose();
	tab()
}

// window.onload=function () {
//     var titles=$('notice-tit').getElementsByTagName('li');
//     divs=$('notice-con').getElementsByTagName('div');
//     if (titles.length!=divs.length)
//         return;
//     for (var i=0;i<=titles.length;i++) {
//         titles[i].id=i;
//         titles[i].onclick=function () {
//             for (var j=0;j<titles.length;j++) {
//                 titles[j].className='';
//                 divs[j].style.display='none';
//             }
//             this.className='active';
//             divs[this.id].style.display='block';
//         }
//     }
// }