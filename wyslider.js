function Slider(opt){
	this.images = opt.images;
	this.container = opt.container;
	this.show = opt.show||1;//
	this.render();
}



Slider.prototype.render = function(){
	var images = this.images.length;
	var str1 = '';
	var str2 = '';
	var str3 ='<div class=sl-box id="sl-box">'
	for(var i=0 ; i<images; i++){
		
		str1 +='<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[i]+'" alt=""></div>';
	}
	for(var i=0 ; i<images; i++){
		
		 str2 +='<div class="off-banner" style="left:'+(i+images)*100+'%"><img src="'+this.images[i]+'" alt=""></div>';
	}
	
	str3 += str1+str2+'</div>'
	this.container.innerHTML = str3;
	
}


Slider.prototype.get = function(){
	var self = this;
	//var aaa = document.querySelectorAll('.off-banner');
	var inContainner = document.getElementById('sl-box');
	setInterval(function(){
		inContainner.style.left += parseInt(inContainner.style.left)+100+'%'; 
	},2000);

}

// for(i=0;i<aaa.length;i++){
		// 	if(parseInt(aaa[i].style.left) != -100){
		// 		aaa[i].style.left =  parseInt(aaa[i].style.left)-100+'%';
		// 	}else{
		// 		aaa[i].style.transition = 'right 0s';
		// 		aaa[i].style.left =  (aaa.length-2)*100+'%';

		// 	}
		// }
		// //self.render()style="left:'+i*100+'%";
