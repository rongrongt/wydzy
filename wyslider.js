function Slider(opt){
	this.images = opt.images;
	this.container = opt.container;
	this.show = opt.show||1;//
	
	this.currentIndex = 0;
	this.count = this.images.length;
	this.render();
}



Slider.prototype.render = function(){
	var images = this.images.length;
	
	
	var str1 ='<div class=sl-box id="sl-box" style="left:0">'
	for(var i=0 ; i<images; i++){
		
		str1 +='<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[i]+'" alt=""></div>';
	}
	str1 += '<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[0]+'" alt=""></div>' 
	
	str1 += '</div>'
	this.container.innerHTML = str1;
	
}


Slider.prototype.get = function(){
	var self = this;
	var aaa = document.querySelectorAll('.off-banner');
	var length = aaa.length;
	var inContainner = document.getElementById('sl-box');

	setInterval(function(){
		if(self.currentIndex == self.count){
			inContainner.style.transitionProperty = 'none';
			inContainner.style.left = '0';
			self.currentIndex = 0;
			setTimeout(function(){
				inContainner.style.transitionProperty = 'left';
				inContainner.style.left = (parseInt(inContainner.style.left) - 100) + '%';
				self.currentIndex++;
			}, 50);
		}else{
			inContainner.style.transitionProperty = 'left';
			inContainner.style.left = (parseInt(inContainner.style.left) - 100) + '%';
			self.currentIndex++;
		}
		
	},5000);
}

