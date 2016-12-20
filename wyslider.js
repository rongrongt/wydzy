// function Slider(opt){
// 	this.images = opt.images;//获取图片
// 	this.count = this.images.length;//图片数量
// 	this.container = opt.container;//外层d容器
// 	this.container.style.overflow = 'hidden';
// 	this.container.style.postion = 'reletive';
// 	this.time =''; 
// 	this.currentIndex = 0;//当前在哪个窗，会复制第一个窗口，一共会比实际图片多出一个窗口。
// 	this.render();
// }



// Slider.prototype.render = function(){
// 	var images = this.images.length;
	
// 	var str2 = '<div id="slider-pointer" style="padding:20px 20px;position: absolute;right: 10px;bottom: 10px;">' ;

// 	var str1 ='<div class=sl-box id="sl-box" style="left:0">';
// 	for(var i=0 ; i<images; i++){
// 		str2 += '<i style="display:inline-block;width:20px;height:20px;margin:0 5px;background:black;border-radius: 50%;" data-value="'+i+'"></i>';


// 		str1 +='<div class="off-banner" style="left:'+i*100+'%; text-align:center;vertical-align:middle;"><img src="'+this.images[i]+'" style="" alt=""></div>';
// 	}

// 	str2 += '</div>'
// 	str1 += '<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[0]+'" alt=""></div>' ;
	
// 	str1 += '</div>';

// 	this.container.innerHTML = str1+str2;
	
// }



// Slider.prototype.get = function(){
// 	var self = this;
// 	var aaa = document.querySelectorAll('.off-banner');
// 	var length = aaa.length;
// 	var inContainner = document.getElementById('sl-box');

// 	this.time = setInterval(function(){

// 		if(self.currentIndex == self.count){
// 			inContainner.style.transitionProperty = 'none';
// 			inContainner.style.left = '0';
// 			self.currentIndex = 0;
// 			setTimeout(function(){
// 				inContainner.style.transitionProperty = 'left';
// 				inContainner.style.left = (parseInt(inContainner.style.left) - 100) + '%';
// 				self.currentIndex++;
// 			}, 50);
// 		}else{
// 			inContainner.style.transitionProperty = 'left';
// 			inContainner.style.left = (parseInt(inContainner.style.left) - 100) + '%';
// 			self.currentIndex++;
// 		}
		
// 	},2000);

// 	this._ppointer();
// }


// Slider.prototype._ppointer =function(){
// 	var inContainner = document.getElementById('sl-box');
// 	var pointer = document.getElementById('slider-banner');
// 	var self = this;
// 	pointer.addEventListener('click',function(event){
// 		if(event.target.nodeName.toLowerCase()== 'i'){
// 			clearInterval(this.time); 
// 			var value= event.target.dataset.value;
// 			self.currentIndex = value;

// 			// inContainner.style.transitionProperty = 'left';
// 			// inContainner.style.left = (parseInt(inContainner.style.left) - value*100) + '%';
// 			// self.currentIndex++;
// 		}
// 		self.get();
// 	},false); 


// }


function Slider(opt){
	this.images = opt.images;//获取图片
	this.count = this.images.length;//图片数量
	this.container = opt.container;//外层d容器
	this.container.style.overflow = 'hidden';
	this.container.style.postion = 'reletive'; 
	this.currentIndex = 0;//当前在哪个窗，会复制第一个窗口，一共会比实际图片多出一个窗口。
	this.interval = null;
	this.render();
}



Slider.prototype.render = function(){
	var images = this.images.length;
	//if(images == 8){ return }//最多只接受8张照片。
	var str2 = '<div id="slider-pointer" style="padding:20px 20px;position: absolute;right: 10px;bottom: 10px;">' ;

	var str1 ='<div class=sl-box id="sl-box" style="left:0;" >';
	for(var i=0 ; i<images; i++){
		str2 += '<i style="cursor:pointer;display:inline-block;width:20px;height:20px;margin:0 5px;background:black;border-radius: 50%;" data-value="'+i+'"></i>';


		str1 +='<div class="off-banner" style="left:'+i*100+'%;text-align:center;line-height:460px;"><img src="'+this.images[i]+'" alt="" style="vertical-align:middle;"></div>';
	}

	str2 += '</div>'
	str1 += '<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[0]+'" alt=""></div>' ;
	
	str1 += '</div>';

	this.container.innerHTML = str1+str2;

	this._ppointer();
	
}

Slider.prototype.goto = function(index){
	var self = this;
	if(self.currentIndex == index){
		return;
	}

	var offset = index - self.currentIndex;

	var inContainner = document.getElementById('sl-box');

	if(self.currentIndex == self.count){
		inContainner.style.transitionProperty = 'none';
		inContainner.style.left = '0';
		self.currentIndex = 0;
		setTimeout(function(){
			inContainner.style.transitionProperty = 'left';
			inContainner.style.left = (parseInt(inContainner.style.left) - 100) + '%';
			self.currentIndex = 1;
		}, 50);
	}else{
		inContainner.style.transitionProperty = 'left';
		inContainner.style.left = (parseInt(inContainner.style.left) - offset * 100) + '%';
		self.currentIndex = index;
	}
}

Slider.prototype.get = function(){
	var self = this;
	var index = self.currentIndex;
	self.interval = setInterval(function(){
		if(index > self.count){
			index = 0;
		}
		self.goto(index++);
	},1500);
}


Slider.prototype._ppointer =function(){
	var pointer = document.getElementById('slider-pointer');
	var self = this;
	
	pointer.addEventListener('click',function(event){
		console.log(event.target.nodeName)
		if(event.target.nodeName.toLowerCase() == 'i'){
			if(self.interval){
				clearInterval(self.interval);
				self.interval = null;
			}
			self.goto(event.target.dataset.value);
		}
		self.get();
	},false); 



}









