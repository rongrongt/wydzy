function Slider(opt){
	this.images = opt.images;
	this.container = opt.container;
	this.show = opt.show||1;//
	this.render();
}


Slider.prototype.render = function(){
	var images = this.images.length;
	str = '';
	for(var i=0 ; i<images; i++){
		
		str +='<div class="off-banner" style="left:'+i*100+'%"><img src="'+this.images[i]+'" alt=""></div>';
	}
	this.container.innerHTML = str;
	
}


Slider.prototype.get = function(){
	var self = this;
	var aaa = document.querySelectorAll('.off-banner');
	setInterval(function(){
		for(i=0;i<aaa.length;i++){
			if(parseInt(aaa[i].style.left) != -100){
				aaa[i].style.left =  parseInt(aaa[i].style.left)-100+'%';
			}else{
				aaa[i].style.left =  (aaa.length-2)*100+'%';
			}
		}
		//self.render();
	},5000);

}


