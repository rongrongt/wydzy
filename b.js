define([], function(){
	function add(a, b){
		return a + b;
	}

	return {
		add: add
	}
});

define(function(require, exports){

	function add(a, b){
		return a + b;
	}

	exports.add = add;

});