function Category(opt){
	this.container = opt.container;
	this.items = opt.items;
	this.currentIndex = opt.currentIndex;
	this._render();
	Object.assign(this, emitter);
}

Category.prototype._render = function (){
	var itemCount = this.items.length;
	var str = '';
	for( i=0; i<itemCount; i++){

		if(i == this.currentIndex){
			str += '<a href="" data-index="' + i +'" data-value="'+this.items[i].value+'" class="current">'+this.items[i].label+'</a> ';
		}else{
			str += '<a href="" data-index="' + i +'" data-value="'+this.items[i].value+'">'+this.items[i].label+'</a> ';
		}
	}
	this.container.innerHTML = str;

	this._bindEvent();
}

Category.prototype._bindEvent = function (){
	var sss = document.querySelectorAll('.pro-class a');
	var self = this;
	for(var i=0 ; i<sss.length; i++){
		sss[i].onclick = function(event){
			event.preventDefault();
			var value = this.dataset['value'];
			self.emit('categoryClick', value);
			self.currentIndex = this.dataset['index'];
			self._render();
		};

		
	}
}




















