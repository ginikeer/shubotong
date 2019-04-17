angular.module('app', []).controller('homeCtrl', function ($scope) {
	$scope.sale_item = [
		{
			'icon': 'i/icon1.png',
			'title': '销售智能分析',
			'is_unread': false,
			'updated_time': '2018-11-18  23:35',
			'show_count': false,
			'count': 0
		},
		{
			'icon': 'i/icon2.png',
			'title': '销售业绩月报',
			'is_unread': true,
			'updated_time': '2018-11-18  23:35',
			'show_count': false,
			'count': 0
		},
		{
			'icon': 'i/icon3.png',
			'title': '部门业绩龙虎榜',
			'is_unread': false,
			'updated_time': '2018-11-18  23:35',
			'show_count': true,
			'count': '99+'
		},
		{
			'icon': 'i/icon4.png',
			'title': '区域销售分析',
			'is_unread': true,
			'updated_time': '2018-11-18  23:35',
			'show_count': false,
			'count': 0
		}
	];
	
	$scope.finance_item = [
		{
			'icon': 'i/icon5.png',
			'title': '财务智能分析',
			'is_unread': true,
			'updated_time': '2018-11-18  23:35',
			'show_count': false,
			'count': 0
		},
		{
			'icon': 'i/icon6.png',
			'title': '收入收款分析',
			'is_unread': false,
			'updated_time': '2018-11-18  23:35',
			'show_count': true,
			'count': 6
		},
		{
			'icon': 'i/icon7.png',
			'title': '损益分析',
			'is_unread': false,
			'updated_time': '2018-11-18  23:35',
			'show_count': true,
			'count': 10
		}
	];
	
});