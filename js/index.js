angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ngTouch']).controller('indexCtrl', function ($scope) {
	
	$scope.noWrapSlides = true;
	var slides = $scope.slides = [];
	
	$scope.addSlide = function () {
		//var newWidth = 600 + slides.length + 1;
		slides.push({
			'title': '移动报表随时随地看',
			'sub_title': '让你一手掌握公司业务数据',
			'sample_img': 'i/sample1.png'
		});
		slides.push({
			'title': '智能分析·预警·可视化',
			'sub_title': '轻松get到数据对企业和管理的价值',
			'sample_img': 'i/sample2.png'
		});
		slides.push({
			'title': '点赞·评论·转发',
			'sub_title': '全面激活个体价值',
			'sample_img': 'i/sample3.png'
		});
		slides.push({
			'title': '三分钟连接ERP',
			'sub_title': '业界领先创新技术，助您轻松连接ERP',
			'sample_img': 'i/sample4.png'
		});
	};
	
	$scope.addSlide();
});