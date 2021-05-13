
	Circles.create({
		id: 'circles-1',//包裹圆形进度条的DOM元素的ID
		radius: 30,//圆形进度条的半径
		value: 50,//圆形进度条的初始值，默认值为0
		 text: function (value) { return value + '%'; },
		width: 5,//圆环的宽度，如果没有指定，值为10
		colors: ['#ffffff', '#0395FF'],//一个颜色数组，第一个颜色是整个圆环的颜色，如果没有指定，值为['#EEE', '#F00']
	});

	window.onload = function () {

		switch (decodeURIComponent(getQueryVariable("type"))) {
			case 'Z':
				document.getElementById("dat_title").innerHTML = '组织回购查询';

				break;
			case 'S':
				document.getElementById("dat_title").innerHTML = '门店回购查询';
				console.log('员工PK');
				document.getElementById("dat_store").classList.remove("display_none");

				break;
			case 'Y':
				document.getElementById("dat_title").innerHTML = '员工回购查询';
				console.log('员工PK');
				document.getElementById("dat_store").classList.remove("display_none");
				document.getElementById("dat_staff").classList.remove("display_none");
				break;
			default:
				break;
		}

	}

	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});


	function serahs() {
		mui('#sheet3').popover('toggle');
	}

	var store = '';
	var stores = [{
		value: "first",
		text: "门店"
	}, {
		value: "second",
		text: "红酒"
	},]
	
	var mode = '';
	var modes = [{
		value: "first",
		text: "月"
	}, {
		value: "second",
		text: "日"
	}]
	// 规格信息
	function classification(val) {
		switch (val.getAttribute("val")) {
			case 'store':
				document.getElementById("cover").classList.add("mengban")

				let picker2 = new mui.PopPicker();
				picker2.setData(stores);
				picker2.pickers[0].setSelectedValue(store, 2000);
				picker2.show(function (SelectedItem) {
					document.getElementById("cover").classList.remove("mengban")
					console.log(SelectedItem);
					store = SelectedItem[0].value;
					val.innerHTML = SelectedItem[0].text;
				})
				break;
			case 'mode':
				document.getElementById("cover").classList.add("mengban")

				let picker4 = new mui.PopPicker();
				picker4.setData(modes);
				picker4.pickers[0].setSelectedValue(mode, 2000);
				picker4.show(function (SelectedItem) {
					document.getElementById("cover").classList.remove("mengban")
					console.log(SelectedItem);
					mode = SelectedItem[0].value;
					val.innerHTML = SelectedItem[0].text;
				})
				break;
			case 'start':
				document.getElementById("cover").classList.add("mengban")

				let dtpicker1 = new mui.DtPicker({
					type: "date",//设置日历初始视图模式 
					labels: ['年', '月', '日'],//设置默认标签区域提示语 
				})
				dtpicker1.show(function (e) {
					document.getElementById("cover").classList.remove("mengban")
					val.innerHTML = e.text;
				})
				break;
			case 'end':
				document.getElementById("cover").classList.add("mengban")

				let dtpicker2 = new mui.DtPicker({
					type: "date",//设置日历初始视图模式 
					labels: ['年', '月', '日'],//设置默认标签区域提示语 
				})
				dtpicker2.show(function (e) {
					document.getElementById("cover").classList.remove("mengban")
					console.log(e);
					val.innerHTML = e.text;
				})
				break;
			default:
				console.log(9999);
		}

		mui(".mui-poppicker-header").on('tap', '.mui-poppicker-btn-cancel', function () {
			document.getElementById("cover").classList.remove("mengban");
		})
		mui(".mui-dtpicker-header").on('tap', '.mui-btn', function () {
			document.getElementById("cover").classList.remove("mengban");
		})
	}
	function selects() {
		console.log("查询");
		mui('#sheet3').popover('toggle');
	}


	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});

	mui.init({
		pullRefresh: {
			container: '#pullrefresh',
			up: {
				contentrefresh: '正在加载...',
				auto: false,//可选,默认false.首次加载自动上拉刷新一次
				callback: pullupRefresh
			}
		}
	});
	/**
	 * 上拉加载具体业务实现
	 */
	// 重新开启加载
	// mui('#pullrefresh').pullRefresh().refresh(true);
	// 分页计数
	var count = 0;
	// 分的条数
	var limit_num = 30;
	var num = 1;
	function pullupRefresh() {

		setTimeout(function () {
			let div = document.createElement("div")
			div.classList = "mui-row";
			div.innerHTML = '<div class="mui-col-xs-12 mui-col-sm-12">总销售额:8888888</div>'
				+ '<div class="mui-col-xs-6 mui-col-sm-6">'
				+ '<p>同比:54%</p>'
				+ '<p>基础目标:99999</p>'
				+ '</div>'
				+ '<div class="mui-col-xs-6 mui-col-sm-6">'
				+ '<div class="wcl">完成率</div>'
				+ '<div class="circle" id="circles_' + num + '"></div>'
				+ '</div>'

			document.getElementById("dat_query2").appendChild(div);
			Circles.create({
				id: 'circles_' + num,//包裹圆形进度条的DOM元素的ID
				radius: 30,//圆形进度条的半径
				value: 50*num/10,//圆形进度条的初始值，默认值为0
				width: 5,//圆环的宽度，如果没有指定，值为10
				text: function (value) { return value + '%'; },
				colors: ['#ffffff', '#0395FF'],//一个颜色数组，第一个颜色是整个圆环的颜色，如果没有指定，值为['#EEE', '#F00']
			});
			console.log('加载');
			mui('#pullrefresh').pullRefresh().endPullupToRefresh((count > (count / limit_num))); //参数为true代表没有更多数据了。
			num++;
		}, 1000);
	}
