// 区域滚动
mui('.mui-scroll-wrapper').scroll();
function serahs() {
    mui('#sheet3').popover('toggle');
}
function selects() {
    mui('#sheet3').popover('toggle');
}




var store = '';
var stores = [{
    value: "first",
    text: "白酒"
}, {
    value: "second",
    text: "红酒"
}, {
    value: "third",
    text: "啤酒"
}, {
    value: "fourth",
    text: "路易十二"
}, {
    value: "fifth",
    text: "人头马"
}]
var staff = '';
var staffs = [{
    value: "first",
    text: "白酒"
}, {
    value: "second",
    text: "红酒"
}, {
    value: "third",
    text: "啤酒"
}, {
    value: "fourth",
    text: "路易十二"
}, {
    value: "fifth",
    text: "人头马"
}]
// 规格信息
function classification(val) {
    switch (val.getAttribute("val")) {
        case 'organization':
            document.getElementById("wuxian").classList.remove("display_none")
            break;
        case 'store':
            let picker2 = new mui.PopPicker();
            picker2.setData(stores);
            picker2.pickers[0].setSelectedValue(store, 2000);
            picker2.show(function (SelectedItem) {
                console.log(SelectedItem);
                store = SelectedItem[0].value;
                val.innerHTML = SelectedItem[0].text;
            })
            break;
        case 'staff':
            let picker3 = new mui.PopPicker();
            picker3.setData(staffs);
            picker3.pickers[0].setSelectedValue(staff, 2000);
            picker3.show(function (SelectedItem) {
                console.log(SelectedItem);
                staff = SelectedItem[0].value;
                val.innerHTML = SelectedItem[0].text;
            })
            break;
        case 'start':
            let dtpicker1 = new mui.DtPicker({
                type: "date",//设置日历初始视图模式 
                beginDate: new Date(2015, 04, 25),//设置开始日期 
                endDate: new Date(2016, 04, 25),//设置结束日期 
                labels: ['年', '月', '日'],//设置默认标签区域提示语 
            })
            dtpicker1.show(function (e) {
                val.innerHTML = e.text;
            })
            break;
        case 'end':
            let dtpicker2 = new mui.DtPicker({
                type: "date",//设置日历初始视图模式 
                beginDate: new Date(2015, 04, 25),//设置开始日期 
                endDate: new Date(2016, 04, 25),//设置结束日期 
                labels: ['年', '月', '日'],//设置默认标签区域提示语 
            })
            dtpicker2.show(function (e) {
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

mui(".mui-content").on('tap', '.icon-shuangzhongjizhi', function () {
    console.log(5555);
    mui('#sheet4').popover('toggle');
    event.stopPropagation();
})

mui(".mui-content").on('tap', '.data_li', function () {
    console.log(556565);
    location.href ="./views/order_details.html"
})

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

function pullupRefresh() {
    setTimeout(function () {
        mui('#pullrefresh').pullRefresh().endPullupToRefresh((count > (count / limit_num))); //参数为true代表没有更多数据了。
        console.log('加载');
    }, 1000);
}


