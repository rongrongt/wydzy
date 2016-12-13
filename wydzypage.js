function Page(opt){
	this.currentPage = opt.currentPage || 1;//当前页
	this.pageCount = opt.pageCount || 1;//总页数
	this.container = opt.container || document.body;//容器

	this.render();
	Object.assign(this, emitter);
}

Page.prototype.bindEvent = function(){
	var self = this;
	currentPage = self.currentPage;
	pageCount = self.pageCount;
	var pre = document.querySelectorAll('.page-pre')[0];
	if(pre){
		if(currentPage == 1){
			pre.onclick = function(e){
			e.preventDefault();
			pre.innerText = 'stop';
			pre.style.backgroundColor = '#777';
			}
		}else{
				pre.onclick = function(e){
					e.preventDefault();
					self.currentPage--;
					self.emit('pageclick', self.currentPage);
					self.render();
				}
			}
	}
	
	var next = document.querySelectorAll('.page-next')[0];
	if(next){
		if(currentPage == pageCount){
			next.onclick = function(e){
			e.preventDefault();
			next.innerText = 'stop';
			next.style.backgroundColor = '#777';
			}
		}else{
				next.onclick = function(e){
					e.preventDefault();
					self.currentPage++;
					self.emit('pageclick', self.currentPage);
					self.render();
				}
			}
	}


	var nums = document.querySelectorAll('.page-num');
	
	for(var i = 0; i < nums.length; i++){
		nums[i].onclick = function(e){
			e.preventDefault();
			self.currentPage = this.dataset['num'];
			self.emit('pageclick', self.currentPage);
			self.render();
		}
	}

}


Page.prototype.render = function(){
	var str = '<div class="pro-page"><a href="" class="page-jt page-pre">&lt;</a>';
	//if(this.currentPage != 1){}

	for (var i = 1; i <= this.pageCount; i++){
		if( i == this.currentPage){
			str += '<a href="" data-num="' + i + '" class="current page-num">' + i + '</a>';
		}else{
			str += '<a href="" data-num="' + i + '" class="page-num">' + i + '</a>';
		}
	}


	if(this.currentPage != this.pageCount){}
		
	

	str += '<a href="" class="page-jt page-next">&gt;</a></div>';

	this.container.innerHTML = str;

	this.bindEvent();

}//


























