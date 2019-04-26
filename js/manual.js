angular.module('app', []).controller('manualCtrl', function ($scope) {
	
	//添加图片
	var injectImg = function(arr, img_name) {
		for(let i = 0; i < arr.length; i++) {
			if( arr[i].no_img != undefined && arr[i].no_img ) 
				continue;
			
			arr[i].img = 'i/' + img_name + (i + 1) + '.png';
		}
		return arr;
	}
	
	//Excel导入步骤
	var _manual_excel = [
		{
			'title': '1.登录数伯通管理后台'
		},
		{
			'title': '2.打开“报表管理”'
		},
		{
			'title': '3.在左侧列表中选择需要更新的报表条目，点击“数据源”'
		},
		{
			'title': '4.“数据源”选项选择“Excel模板”'
		},
		{
			'title': '5.点击“模板下载“，按下载的模板更新数据'
		},
		{
			'title': '6.完成Excel模板更新后，点击上传区域或将Excel模板拖拽至上传区域'
		},
		{
			'title': '7.点击确定，完成更新'
		}
	];
	
	//API开放接口连接步骤
	var _manual_api = [
		{
			'title': '1.登录数伯通管理后台'
		},
		{
			'title': '2.打开“报表管理”'
		},
		{
			'title': '3.在左侧列表中选择需要更新的报表条目，点击“数据源”'
		},
		{
			'title': '4.“数据源”选项选择“API”'
		},
		{
			'title': '5.点击”API信息“获取API token信息'
		},
		{
			'title': '6.点击”API接入文档”查看具体API更新方法，进行后续对接开发'
		},
		{
			'title': ''
		}
	];
	
	var _manual_erp = [
		{
			'title': '1.登录数伯通管理后台'	
		},
		{
			'title': '2.打开“报表管理”'	
		},
		{
			'title': '3.在左侧列表中选择需要更新的报表条目，点击“数据源”'	
		},
		{
			'title': '4.“数据源”选项选择“ERP”'	
		},
		{
			'title': '5.根据用户相应ERP系统，下载对应版本的“数伯通连接助手”'	
		},
		{
			'title': '6.本地安装“数伯通连接助手”，完成ERP连接',
			'no_img': true
		}
	];
	
	//添加图片
	_manual_excel = injectImg(_manual_excel, 'manual_excel_step');
	_manual_api = injectImg(_manual_api, 'manual_api_step');
	_manual_erp = injectImg(_manual_erp, 'manual_erp_step');
	
	$scope.manual_excel = _manual_excel;
	$scope.manual_api = _manual_api;
	$scope.manual_erp = _manual_erp;

});