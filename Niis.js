/**
 * Created by guojinliang on 16/10/13
 * Niis javascript framework, version 1.0.0
 */
;(function(window, document, undefined){
	window.Niis = window.$ = function (args) {
		return new Niis;
	};
	var core_version = '1.0.0';
	var class2Type 	 = {},
		emptyArray	 = [],
		document 	 = window.document,
		root		 = this,
		slice		 = emptyArray.slice;

	Niis = function(args){
		this.elements = [];// 创建一个空数组来存放节点对象

		//处理参数字符串的情况
		if (typeof args === 'string') {
			//模拟css选择器,比如$('#selector')
			if (args.indexOf(' ') != -1) { //存在空格时
				var elements  	= args.split(' ');//将节点对象分割为字符串
				var tempNodes 	= [];//存放临时节点对象的数组，解决被覆盖的问题
				var parentNodes = [];//存放父节点
				for (var i = 0; i < elements.length; i++) {
					if (parentNodes.length === 0) parentNodes.push(document);//如果没有父节点，就把document放入
					switch (elements[i].charAt(0)) {
						//处理id情况
						case '#' :
							tempNodes = [];// 清理临时节点
							tempNodes.push(this.getId(elements[i].substring(1)));
							parentNodes = tempNodes;
							break;
						//处理class情况
						case '.' :
							tempNodes = [];
							for (var j = 0; j < parentNodes.length; j++)j{
								parentNodes[j] }
					}
				}
			}
		//处理参数是object的情况
		} else if (typeof args === 'object') {
		//处理参数是function的情况
		} else if (typeof args === 'function') {

		}
	};

	/************************************ Niis.Fn ******************************/
	Niis.Fn = Niis.prototype = {

		constructor: Niis,
		//$().version => 1.0.0
		version: core_version,
		//页面加载完毕事件
		/*$(document).ready(function(){
	
		})*/
		ready: function(fn){
			if (fn == null) {
				fn = document;
			}
			var load = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = fn;
			}else{
				window.onload = function(){
					load();
					fn();
				}
			}
		},


		eq: function(num){
			var eles = this.elements[num];
			this.elements = [];
			this.elements[0] = eles;
			return this;
		},


		

	}
})(window, document)