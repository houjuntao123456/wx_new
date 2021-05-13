window.onload = function () {
    window_pay();

}
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    /* 下列可选修改属性 */
    scrollY: true, //是否竖向滚动
    // startX: 0, //初始化时滚动至x
    // startY: 0, //初始化时滚动至y
    indicators: false, //是否显示滚动条
    // bounce: true //是否启用回弹
});

var price_xiugai = true;
// 输入会员
function window_pay() {
    mui.prompt('', '输入卡号', '会员卡号', ['非会员', '查询会员'], function (e) {
        if (e.index == 0) {
            document.activeElement.blur();

        } else if (e.index == 1) {
        }

    });
    let zhishi = document.getElementsByClassName("mui-popup-title")[0].parentElement;
    let p = document.createElement("p");
    p.style = "font-size: xx-small;  margin-top: 10px;margin-bottom: 0px;"
    p.innerHTML = "注意:(会员必须输入卡号/手机号,非会员无需输入!))";
    zhishi.appendChild(p);
    

}


// 切换会员
mui(".mui-table-view").on('tap', '.switch_member', function (e) {
    event.stopPropagation();
    //获取id
    window_pay();
    mui("#member_ziliao")[0].classList.add("mui-active");

})
//自定义展开后不需要讲同级元素折叠

mui(".mui-table-view").on('tap', '.add_shoping', function (e) {
    event.stopPropagation();
    //获取id
    // var id = this.getAttribute("id");
    mui('.mui-off-canvas-wrap').offCanvas().toggle();
    // console.log('123456');
})


document.getElementById("back_kjWrite").onclick = function () {
    mui('.mui-off-canvas-wrap').offCanvas().toggle();
}




// 添加商品搜索图标
mui('.mui-bar-nav-bg').on('tap', '#searchs', function () {
    mui.prompt('', '输入货号/名称', '商品搜索', ['搜索'], function (e) {
        if (e.index == 0) {
            mui.juntao(e.value+'正在搜索!', { duration: 'short', type: 'div' }, function () {
            });
        }
    });
})

// 选择支付方式
var pay_fansghi = 'WeChat';
mui("#id_pay_result").on('tap', '.result', function (e) {
    console.log(9999);
    let weixin = '<div class="radios" name="WeChat">'
        + '<svg class="icon" aria-hidden="true">'
        + '<use xlink: href="#icon-weixinlogo3"></use>'
        + '</svg >'
        + '<span class="ziti_font_size">&nbsp;微信</span>'
        + '</div>'

    let zhifubao = '<div class="radios" name="Alipay">'      //支付宝
        + '<svg class="icon" aria-hidden="true">'
        + '<use xlink: href="#icon-zhifubaozhifu"></use>'
        + '</svg >'
        + '<span class="ziti_font_size">&nbsp;支付宝</span>'
        + '</div>'
    let other = '<div class="radios" name="other">'      //会员钱包
        + '<svg class="icon" aria-hidden="true">'
        + '<use xlink: href="#icon-qitazhifu4"></use>'
        + '</svg >'
        + '<span class="ziti_font_size">&nbsp;会员钱包</span>'
        + '</div>'

    let cash = '<div class="radios" name="cash">'      //现金支付
        + '<svg class="icon" aria-hidden="true">'
        + '<use xlink: href="#icon-qitazhifu3"></use>'
        + '</svg >'
        + '<span class="ziti_font_size">&nbsp;现金</span>'
        + '</div>'

    if (pay_fansghi == "WeChat") {
        weixin = '<div class="checkeds radios" name="WeChat">'    //微信
            + '<svg class="icon" aria-hidden="true">'
            + '<use xlink: href="#icon-weixinlogo3"></use>'
            + '</svg >'
            + '<span class="ziti_font_size">&nbsp;微信</span>'
            + '</div>'
    } else if (pay_fansghi == "Alipay") {
        zhifubao = '<div class="checkeds radios" name="Alipay">'      //支付宝
            + '<svg class="icon" aria-hidden="true">'
            + '<use xlink: href="#icon-zhifubaozhifu"></use>'
            + '</svg >'
            + '<span class="ziti_font_size">&nbsp;支付宝</span>'
            + '</div>'
    } else if (pay_fansghi == "other") {
        other = '<div class="checkeds radios" name="other">'      //其他
            + '<svg class="icon" aria-hidden="true">'
            + '<use xlink: href="#icon-qitazhifu4"></use>'
            + '</svg >'
            + '<span class="ziti_font_size">&nbsp;会员钱包</span>'
            + '</div>'
    } else if (pay_fansghi == "cash") {
        cash = '<div class="checkeds radios" name="cash">'      //现金
            + '<svg class="icon" aria-hidden="true">'
            + '<use xlink: href="#icon-qitazhifu3"></use>'
            + '</svg >'
            + '<span class="ziti_font_size">&nbsp;现金</span>'
            + '</div>'
    }

    mui.confirm(weixin + zhifubao + other + cash, '选择支付方式', ['确定'], function (el) {
        console.log(pay_fansghi);
        switch (pay_fansghi) {

            case 'WeChat':
                // console.log('微信');
                $('#wx_pays').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                $('#span_wx_show').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                break;
            case 'Alipay':
                console.log(4444);
                // console.log('支付宝');
                $('#zfb_pays').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                $('#span_zfb_show').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                console.log(5555);
                break;
            case 'other':
                $('#qt_pays').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                $('#span_qt_show').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                break;
            case 'cash':
                $('#cash_pays').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                $('#span_cash_show').removeClass('dis').siblings().addClass('dis');  //当前元素添加样式同胞元素移除样式
                break;
            default:
            // console.log('其他');
        }



    })
    mui(".mui-popup-text").on('tap', '.radios', function (e) {
        $(this).addClass('checkeds').siblings().removeClass('checkeds');  //当前元素添加样式同胞元素移除样式
        pay_fansghi = this.getAttribute("name");
    })
})
var reg_suokeduos = new RegExp("^[0-9]*$");
mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        //       down: {
        //         callback: pulldownRefresh
        //       },
        up: {
            contentrefresh: '正在加载...',
            auto: true,//可选,默认false.首次加载自动上拉刷新一次
            callback: pullupRefresh
        }
    }
});
/**
 * 下拉刷新具体业务实现
 */

var serchs_code = "";
function pulldownRefresh() {
}
/**
 * 上拉加载具体业务实现
 */
// 重新开启加载
// mui('#pullrefresh').pullRefresh().refresh(true);
// 分页计数
var count = 0;
// 分的条数
var limit_num = 10;
var Discount = 'off';
function pullupRefresh() {
    setTimeout(function () {
        mui('#pullrefresh').pullRefresh().endPullupToRefresh((count > (count / limit_num))); //参数为true代表没有更多数据了。
    }, 1000);
}

var tijiao_money_shop = [];

// 添加商品
function add_shop(value) {
    let times = Date.now();
    mui("#shangpin")[0].classList.add("mui-active");
    mui("#member_ziliao")[0].classList.remove("mui-active");
    let li = document.createElement("li");
    li.setAttribute("id", times);
    li.className = 'mui-table-view-cell mui-media';
    li.style = "padding-left: 15px;";
    li.innerHTML = '<a href="javascript:;">'
        + ' <img class="mui-media-object mui-pull-left"'
        + ' src="' + value.getAttribute("img") + '">'
        + '<div class="mui-media-body" style="padding-top: 10px;">'
        + '<span>' + value.getAttribute("name") + '</span>'
        + '<p class="mui-ellipsis">'
        + ' <p>' + value.getAttribute("code") + '</p>'
        + '<p>颜色:' + value.getAttribute("color") + '</p>'
        + '<p>尺码:' + value.getAttribute("sizes") + '</p>'
        + '<p><span>' + value.getAttribute("price") + '</span>元</p>'
        + ' </p>'
        + ' <button type="button" class="mui-btn mui-btn-primary"'
        + 'style="position: absolute;top: 5%;right: 10px;" times="' + times + '" codes=' + value.getAttribute("code") + ' onclick="modify_shop(this)">修改</button>'
        + ' <button type="button" class="mui-btn mui-btn-primary"'
        + 'style="position: absolute;top: 47%;right: 10px;" times="' + times + '" onclick="delect_shop(this)">删除</button>'
        + ' </div>'
        + ' </a>'
    mui("#add_shoppings_look")[0].appendChild(li);
    mui('.mui-off-canvas-wrap').offCanvas().toggle();

}

// 删除商品
function delect_shop(value) {
    let idd = value.getAttribute("times");
    mui("#" + idd)[0].parentNode.removeChild(mui("#" + idd)[0]);
}

function modify_shop(pic) {
    let idd = pic.getAttribute("times");
    let pricess = pic.previousElementSibling.previousElementSibling.firstElementChild;
    let codes = pic.getAttribute("times");
    if (price_xiugai == false) {
        mui.juntao('修改商品权限未开启!', { duration: 'short', type: 'div' }, function () {
        });
    } else {
        mui.prompt('', '输入要修改的价格', '商品价格', ['取消', '确定'], (e) => {
            if (e.index == 1) {
                pricess.innerHTML = e.value;
            }
        });
    }
}

var jsonss = [{
    result_money: '0',
    text: '不使用卡劵2',
    card_many: '0',
    card_type: '0',
    money: '0',
    name: '不使用卡劵2',
    value: ""
}]
mui(".ui_class").on('tap', '.yhk_pay', function (e) {
    let picker = new mui.PopPicker();
    picker.setData(jsonss);
    picker.show(function (SelectedItem) {
        card_card_money(SelectedItem[0].result_money, SelectedItem[0].card_type, SelectedItem[0].card_many, SelectedItem[0].value)
    })

})

$("#stored").bind('input propertychange', function () {
    let numb = $(this).val();
    if (numb.length !==0){
        $("#storeds").html("-" + round_tow(numb));
    }else{
        $("#storeds").html("");
    }
    
});
$("#integral").bind('input propertychange', function () {
    let numb = $(this).val();
    if (numb.length != 0) {
        $("#integrals").html("-" + round_tow(numb));
    }else{
        $("#integrals").html("");
    }
   
});

function round_tow(num) {
    return parseFloat(num).toFixed(2);
}

