
function Login(opt){
	this.url = opt.url;
	this.LoginForm();

}
	



Login.prototype.LoginForm = function (){

	var proGroup = document.getElementById('pro-group');
	proGroup.addEventListener('click',function(){
		setCookie('followsuc','ygz');
		if(getCookie('loginsuc')){
			proGroup.style.display = none;
			document.getElementById('post-has').style.display = 'block';

			self = this;
			var xhr = new XMLHttpRequest();
			var data;
			xhr.onload = function (){
				data = JSON.parse(xhr.responseText);
				document.getElementById('pro-ary').innerHTML=data.num;

			}
			var url= this.url+'?username='+getCookie(username)+'&followsuc=ygz';
			xhr.open('GET',url,true);
			xhr.send(null);


		}else if(!getCookie('loginsuc')){
			var regUse = /^[\w]+@[\w]+\.[a-z]{1,3}/;
			var regPass = /^.{6,20}/;

			document.getElementById('pro-none-login').style.display = 'block';
			document.getElementById('login-xx').onclick = function(){document.getElementById('pro-none-login').style.display = 'none';
				return;
				}

			function check( inputId,tip,err,reg){//1,inpur的id 2,提示的id 3,错误的id 4，正则匹配的
				document.getElementById(inputId).addEventListener('focus',function(){
					document.getElementById(err).style.display = 'none';
					document.getElementById(tip).style.display = 'inline';
				},false);
				document.getElementById(inputId).addEventListener('blur',function(){

					if(!reg.test(this.value)){
						document.getElementById(err).style.display = 'inline';
					document.getElementById(tip).style.display = 'none';
					}
				},false);
			}
			check('wy-id','tipID','idErr',regUse);
			check('wy-password','tippass','passErr',regPass);





		}
	},false);
}
