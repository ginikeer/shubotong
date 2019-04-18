angular.module('app', []).controller('entranceCtrl', function ($scope) {
	$scope.module_item = [
		{
			'icon': 'i/icon_excel.png',
			'title': 'Excel模板帐套'
		},
		{
			'icon': 'i/icon_kingdee.png',
			'title': '金蝶ERP帐套'
		},
		{
			'icon': 'i/icon_yonyou.png',
			'title': '用友ERP帐套'
		}
	];
	
	$scope.module_choose = function(i) {
		$scope.focus = i;
	}
});