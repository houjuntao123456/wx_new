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

