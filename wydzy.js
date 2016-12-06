;(function(){

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


	window.onload = function (){

		var tipsClose = getCookie('close');

		if(tipsClose != 'y'){

			document.getElementById('job-box').style.display='block';
		}

		document.getElementById('dele-tip-close').addEventListener('click',function(){
				setCookie('close','y');
			document.getElementById('job-box').style.display='none';	
		},false);


	}

	


  		
  	















})();//
/*


	function delCookie(name){//删除cookie
		var exp = new Date();
  		exp.setTime(-1000);
		document.cookie = name + "=''; expires=" + exp.toGMTString();
		
	}





*/

