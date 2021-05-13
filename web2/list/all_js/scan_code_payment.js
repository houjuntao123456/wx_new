var pNum = '';
var pMoney = '';
var giftMoney = '';
window.onload = function () {
    pMoney = $('h3').text().substring(1);
    var payP = document.createElement('p');
    payP.innerHTML = '<span class="iconfont icon-weixin"></span>微信支付(' + pMoney + ')';
    $('.but').append(payP);
}
//赠送详情
mui("#sheet1").on('tap', '.welfare', function () {
    mui.toast(this.innerText, { duration: 'long', type: 'div' })
})

//充值活动
mui("#pay_list").on('tap', 'li', function () {
    if ($(this).hasClass('active')) {
        mui('#sheet1').popover('hide');
        var tspan = $(this.getElementsByClassName('icon-duigou')[0]); //获取当前li里的.icon-duigou
        tspan.removeClass("icon-act"); //向当前含有.icon-duigou类的span标签里 添加icon-act类
        $(this).removeClass("active");
    } else {
        $('.icon-duigou').removeClass('icon-act'); //获取所有.icon-duigou
        var tspan = $(this.getElementsByClassName('icon-duigou')[0]); //获取当前li里的.icon-duigou
        tspan.addClass("icon-act"); //向当前含有.icon-duigou类的span标签里 添加icon-act类
        $(this).addClass("active").siblings().removeClass("active");
        pNum = this.getAttribute("num"); //获取充值金额
        mui('#sheet1').popover('show');
    }


})
//充值有礼
mui("#pay_gift").on('tap', 'li', function () {
    var gspan = $(this.getElementsByClassName('sicon')[0]);
    if (gspan.hasClass("icon-duigou")) { //如果是选中状态 则取消选中
        gspan.removeClass('icon-duigou');
        gspan.addClass("icon-yuanxing");
        giftMoney = '';
    } else {
        $('.sicon').removeClass('icon-duigou');
        $('.sicon').addClass('icon-yuanxing');
        gspan.removeClass('icon-yuanxing');
        gspan.addClass("icon-duigou");
        giftMoney = this.getAttribute("money"); //获取充值金额
        // console.log(giftMoney);
    }
})

mui("h4").on('tap', 'span', function () { //点击查看通用门店
    let payStore = '<div><table text-align="right" border="1"><tr><th>商品名称</th><th>尺码</th><th>颜色</th><th>价格</th></tr></table><div class="mui-scroll-wrapper" style="top:80px"><div class="mui-scroll" id ="mountains" style="padding-left: 15px;padding-right: 15px;"></div></div> </div>';
    mui.alert(payStore, '商品信息', function () { });


    document.getElementsByClassName("mui-popup-text")[0].style.height = '300px';
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // let pppp = '<table text-align="right" border="1"><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr><tr><td>女士皮衣</td><td>M</td><td>红色</td><td>89</td></tr></table>'
    // document.getElementById("mountains").innerHTML = pppp;
    document.getElementById("mountains").appendChild(buildTable(tableData));
})
let tableData = [
    {
        '商品名称': "女士皮衣",
        '尺码': "M",
        '颜色': "红色",
        '价格': 89
    },
    { '商品名称': "小羊皮", '尺码': "365", '颜色': "青春活力", '价格': 189 },
    { '商品名称': "短靴", '尺码': "37", '颜色': "黑色", '价格': 158 },
    { '商品名称': "老爹鞋", '尺码': "37", '颜色': "白色", '价格': 160 },
    { '商品名称': "卫衣", '尺码': "M", '颜色': "黄色", '价格': 88 },
    { '商品名称': "小蜗牛项链", '尺码': "M", '颜色': "玫瑰金", '价格': 199 },
    { '商品名称': "蜜透粉底", '尺码': "M", '颜色': "黑盒", '价格': 56 },
    { '商品名称': "蛋糕裙", '尺码': "M", '颜色': "杏色", '价格': 89 },
    { '商品名称': "喇叭裤", '尺码': "2尺", '颜色': "黑色", '价格': 89 },
    { '商品名称': "女士皮衣", '尺码': "M", '颜色': "红色", '价格': 89 }
];
// 创建表格
function buildTable(data) {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    // 通过 for in 循环遍历对象,得到对象的属性,为表头添加内容
    // for (let i in data[0]) {
    //     // let th = document.createElement("th");
    //     // th.innerText = i;
    //     // tr.appendChild(th);
    // }
    // table.appendChild(tr);
    // 通过 forEach 循环遍历对象数组,为表格添加行
    data.forEach((value, index) => {
        let tr = document.createElement("tr");
        // 通过 for in 循环遍历对象,得到对象的属性,给每行添加内容
        for (let index1 in data[index]) {
            let td = document.createElement("td");
            td.innerText = data[index][index1];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    });
    //设置表格的对齐属性,和边框属性
    table.setAttribute("text-align", "right");
    table.setAttribute("border", "1");
    console.log(table);
    return table;
}


//提交
mui(".but").on('tap', 'p', function () {
    console.log(pNum);
    console.log(pMoney);
    console.log(giftMoney);
    // mui.post('/index.php/../', {
    //     payNum: pNum,
    //     payMoney: pMoney
    // },function(data){
    //     //服务器返回响应，根据响应结果，分析是否登录成功；
    // },'json');
})
// function payUpload(){ }

mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});