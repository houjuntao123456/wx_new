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
        // let table = document.createElement("table");
        // table.classList = "gridtable";
        // table.innerHTML = '<tr>'
        //     + ' <td>途径:</td>'
        //     + ' <td>消费获得</td>'
        //     + ' </tr>'
        //     + ' <tr>'
        //     + ' <td>储值:</td>'
        //     + '<td>+5</td>'
        //     + '</tr>'
        //     + ' <tr>'
        //     + '<td>门店:</td>'
        //     + ' <td>开发区门店</td>'
        //     + ' </tr>'
        //     + ' <tr>'
        //     + ' <td>时间:</td>'
        //     + '<td>2020.12.12-12.12.12</td>'
        //     + '</tr>'
        // document.getElementById("stionTbale").appendChild(table);
        console.log('加载');
    }, 1000);
}