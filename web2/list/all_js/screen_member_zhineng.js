function checkboxOnclick(val) {
    console.log(val);
}
function huaxiang() {
    mui('#sheet5').popover('toggle');
}
function selects(){
    mui('#sheet5').popover('toggle');
}
mui(".secteds").on('tap', '.mui-table-view-cell', function () {
    let val = this;
    if (this.classList.contains("stars")) {
        this.classList.remove("stars")
    } else {
        this.classList.add("stars")
    }

})
var shop = '';
var shops = [{
    value: "first",
    text: "会员1"
}, {
    value: "second",
    text: "会员2"
}]
mui(".suoke_header").on('tap', '.all_member', function () {
    let val = this;
    let picker5 = new mui.PopPicker();
    picker5.setData(shops);
    picker5.pickers[0].setSelectedValue(shop, 2000);
    picker5.show(function (SelectedItem) {

        console.log(SelectedItem);
        shop = SelectedItem[0].value;
        val.innerHTML = SelectedItem[0].text;
    })
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


mui(".suoke_header").on('tap', '.icon-qunfa1', function () {
    console.log(4444);
    mui('#sheet4').popover('toggle');
})

mui("#sheet4").on('tap', '.marketing', function () {
    let val = this.getAttribute("val");
    // console.log(4444);
    switch (val) {
        case 'duanxin':
            location.href = '../views/SMS_marketing.html'
            break;
        case 'weixin':
            location.href = '../views/Wechat_marketing.html'
            break;
        case 'shitu':
            location.href = '../views/View_marketing.html'
            break;
        case 'kajuan':
            location.href = '../views/Credit_marketing.html'
            break;

        default:
            break;
    }

})