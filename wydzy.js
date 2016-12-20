
window.onload = function (){


	function getCookie(name){

		var cookiesStr = document.cookie;

		var cookiesAry = cookiesStr.split(';');

		var cookArray = [];
		for(var i=0;i<cookiesAry.length;i++){

			cookArray = cookiesAry[i].split('=');

			if(cookArray[0].trim() == name){
				return cookArray[1];
			}
		}

	}


	function setCookie(name,value){
		document.cookie = name+'='+value;
	} 

	function tipsNew(){
		var tipsClose = getCookie('close');
		var progz = getCookie('cFocus');

		if(tipsClose != 'y'){

			document.getElementById('job-box').style.display='block';

			document.getElementById('dele-tip-close').addEventListener('click',function(){
				1
				setCookie('close','y');
				document.getElementById('job-box').style.display='none';	
			},false);
		}else if(tipsClose == 'y'){
			document.getElementById('job-box').style.display='none';

		}
	}
	tipsNew();



	// if(progz != 'post'){

	// 	document.getElementById('pro-group').style.display='inline-block';

	// 	document.getElementById('pro-group').addEventListener('click',function(){
	// 		setCookie('cFocus','post');
	// 		document.getElementById('pro-group').style.display='none';
	// 	document.getElementById('post-has').style.display='inline-block';	
	// 	},false);
	// }else if(progz == 'post'){
	// 	document.getElementById('pro-group').style.display='none';
	// 	document.getElementById('post-has').style.display='inline-block';


	// }
	var login = new Login({
		url:'bdehfe'
	})


	var page = new Page({
		currentPage:1,
		pageCount: 3,
		container: document.getElementById('page-box')
	});


	page.on('pageclick', function(pageIndex){
		list.setPageIndex(pageIndex);
	});

	var category =  new Category({
		container:document.getElementById('pro-class'),

		items:[{
			label:'产品设计', 
			value:'pd'
		},{
			label:'编程语言',
			value:'pl'
		}],

		currentIndex:0
	})

	category.on('categoryClick', function(category){
		list.setCategory(category);
	});

	var list = new List({
		url: './webDev/coursesByCategory.php',
		container: document.getElementById('produce-desi-box'),
		pageIndex: 1,
		category: 'pd'
	});

	var slider = new Slider({
		images:['wyimg/banner1.jpg',
				'wyimg/banner2.jpg',
				'wyimg/banner3.jpg',
				'wyimg/05.jpg'
				],
		container:document.getElementById('slider-banner'),

	});
	slider.get();
	
}//



  		
  	















//
/*


	function delCookie(name){//删除cookie
		var exp = new Date();
  		exp.setTime(-1000);
		document.cookie = name + "=''; expires=" + exp.toGMTString();
		
	}





*/

