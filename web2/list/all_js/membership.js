mui(".suoke_header").on('tap', '.icon-shaixuan', function () {
    mui('#sheet3').popover('toggle');
})


function selects(){
    mui('#sheet3').popover('toggle');
}
var store = '';
var stores = [{
    value: "first",
    text: "白酒店"
}, {
    value: "second",
    text: "红酒店"
}, {
    value: "third",
    text: "啤酒店"
}, ]
var staff = '';
var staffs = [{
    value: "first",
    text: "王三"
}, {
    value: "second",
    text: "王四"
}, {
    value: "third",
    text: "王五"
}, {
    value: "fourth",
    text: "王三十二"
}, {
    value: "fifth",
    text: "王马"
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
    let val=this.getAttribute("val");
    // console.log(4444);
    switch (val) {
        case 'duanxin':
            location.href ='../views/SMS_marketing.html'
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
mui("#pullrefresh").on('tap', '.mui-media-body', function () {
    let val = this.getAttribute("val");
    // console.log(4444);

    location.href = './member_data.html'
      

})

// function selects() {
//     mui('#sheet4').popover('toggle');
// }
