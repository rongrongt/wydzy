function List(opt){
	this.url = opt.url;
	this.container = opt.container;
	this.pageIndex = opt.pageIndex;//当前页
	this.category = opt.category;//课程分类
	this._getData();
}

List.prototype.setPageIndex = function (index){
	this.pageIndex = index;//设置要获取的数据的当前页码
	this._getData();
}

List.prototype.setCategory = function(category){//设置当前课程分类
	this.category = category;
	this._getData();
}
List.prototype._getData = function (){//向服务器发请求。获取课程列表，
	var self = this;
	var xhr = new XMLHttpRequest();
	var data;
	xhr.onload = function (){
		data = JSON.parse(xhr.responseText);
		self._render(data);
	}
	var url= this.url+'?pageIndex='+this.pageIndex+'&category='+this.category
	xhr.open('GET',url,true);
	xhr.send(null);

}

List.prototype._render = function(data){//ajax返回成功开始渲染页面。
	
	var list = data.list;

	var str = '';
	for(var i=0;i<list.length;i++){
		str += '<div class="des-one-of">\
		<div class="desof-cover">\
			<a href=""><img src="'+list[i].bigPhotoUrl+'" alt=""></a>\
		</div>\
		<div class="noe-of-itr">\
			<h6 class="des-title">\
				<a href="">'+list[i].name+'</a>\
			</h6>\
			<b class="des-kinds">'+list[i].provider+'</b>\
			<b class="des-buzz"><i class="rent"></i><b >'+list[i].learnerCount+'</b></b>\
			<strong class="des-price">\
				￥<b>'+list[i].price+'</b>.00\
			</strong>\
		</div>\
	</div> ';
	}
	
	this.container.innerHTML = str;
}

























