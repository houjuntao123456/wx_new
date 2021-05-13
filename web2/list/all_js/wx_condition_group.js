var json_information = [
    {
        name: '消费总额:',
        children: [
            {
                name: "100~500元",
                type: 1,

            },
            {
                name: "500~1000元",
                type: 1,

            },
            {
                name: "自定义金额",
                type: 2,
                val: "元"

            }
        ]
    },
    {
        name: '消费次数:',
        children: [
            {
                name: "0~5次",
                type: 1,

            },
            {
                name: "5~10次",
                type: 1,

            },
            {
                name: "自定义次数",
                type: 0,
                val: "次"

            }
        ]
    },
    {
        name: '消费数量:',
        children: [
            {
                name: "0~5个",
                type: 1,

            },
            {
                name: "5~10个",
                type: 1,

            },
            {
                name: "自定义数量",
                type: 2,
                val: "个"

            }
        ]
    }, {
        name: '总储值:',
        children: [
            {
                name: "0~500元",
                type: 1,

            },
            {
                name: "500~1000元",
                type: 1,

            },
            {
                name: "自定义金额",
                type: 0,
                val: "元"

            }
        ]
    },
    {
        name: '剩余储值:',
        children: [
            {
                name: "0~500元",
                type: 1,

            },
            {
                name: "500~1000元",
                type: 1,

            },
            {
                name: "自定义金额",
                type: 0,
                val: "元"

            }
        ]
    },
    {
        name: '剩余积分:',
        children: [
            {
                name: "0~500分",
                type: 1,

            },
            {
                name: "500~1000分",
                type: 1,

            },
            {
                name: "自定义积分",
                type: 0,
                val: "分"

            }
        ]
    },
    {
        name: '未消费天数:',
        children: [
            {
                name: "0~50天",
                type: 1,

            },
            {
                name: "50~100天",
                type: 1,

            },
            {
                name: "自定义天数",
                type: 0,
                val: "天"

            }
        ]
    },
    {
        name: '转介绍人数:',
        children: [
            {
                name: "0~5人",
                type: 1,

            },
            {
                name: "5~10人",
                type: 1,

            },
            {
                name: "自定义人数",
                type: 0,
                val: "人"

            }
        ]
    }, {
        name: '多少天后生日:',
        children: [
            {
                name: "0~5天",
                type: 1,

            },
            {
                name: "5~10天",
                type: 1,


            },
            {
                name: "自定义天数",
                type: 0,
                val: "天"

            }
        ]
    }
]


mui(".mui_radios").on('tap', '.s_radio', function () {
    //获取id
    let txts = this;
    let type = this.getAttribute("types");
    let jqthis = $(this);
    //当前元素添加样式同胞元素移除样式
    console.log(this);
    if (type == 1) {
        if (this.classList.contains("labsss")) {
            this.classList.remove('labsss');
        } else {
            $(this).addClass('labsss').parent().siblings().children().removeClass('labsss');
            $(this).parent().siblings().children().removeClass('labsss2');
        }
    } else {


        console.log('自定义');
        let confirms = '<div style="color: white;">'
            + '<input type="number" id="starss" class="inputss" >-<input type="number" id="endss" class="inputss" >'
            + '</div>'
        mui.confirm(confirms, '输入自定义区间', ['取消', '确定'], function (e) {
            console.log(e);
            if (e.index == 1) {
                if (parseInt(document.getElementById("starss").value) < parseInt(document.getElementById("endss").value)) {
                    jqthis.addClass('labsss2').parent().siblings().children().removeClass('labsss');
                    mui.toast(document.getElementById("starss").value + '~' + document.getElementById("endss").value, { duration: 'long', type: 'div' })
                    txts.innerHTML = document.getElementById("starss").value + '~' + document.getElementById("endss").value + txts.getAttribute("val")
                } else {
                    mui.toast('请检查输入顺序!', { duration: 'long', type: 'div' })
                    return false;
                }
                console.log('取消');
            }
        })
    }



});
function cancel() {
    history.go(0);
}
mui('.mui-scroll-wrapper').scroll();
(function () {
    let members_data = document.getElementById("members_data");
    json_information.forEach((x, y) => {
        let div1 = document.createElement("div");
        div1.innerHTML = x.name;
        div1.className = "opop";
        let div2 = document.createElement("div");
        div2.className = "mui-row";
        x.children.forEach((a, y) => {
            let div3 = document.createElement("div3");
            div3.className = "mui-col-xs-4 mui-col-sm-4 ";
            div3.innerHTML = '<p class="s_radio" val="' + a.val + '"  types="' + a.type + '">' + a.name + '</p>';
            div2.appendChild(div3);
        });
        members_data.appendChild(div1);
        members_data.appendChild(div2);

    });
})();


var cftions = '';
var cfions = [{
    value: "first",
    text: "第一项"
}, {
    value: "second",
    text: "第一项"
}, {
    value: "third",
    text: "第三项"
}, {
    value: "fourth",
    text: "第四项"
}, {
    value: "fifth",
    text: "第五项"
}]
// 点击选择分类
mui(".group_show").on('tap', '.classification', function () {
    let val = this;
    let picker = new mui.PopPicker();
    picker.setData(cfions);
    picker.pickers[0].setSelectedValue(cftions, 2000);
    picker.show(function (SelectedItem) {
        console.log(SelectedItem);
        cftions = SelectedItem[0].value;
        val.innerHTML = SelectedItem[0].text;

    })
})


var guige = '';
var guiges = [{
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
mui(".group_show").on('tap', '.classification2', function () {
    let val = this;
    let picker = new mui.PopPicker();
    picker.setData(guiges);
    picker.pickers[0].setSelectedValue(guige, 2000);
    picker.show(function (SelectedItem) {
        console.log(SelectedItem);
        guige = SelectedItem[0].value;
        val.innerHTML = SelectedItem[0].text;
    })
})
function classification(e) {
    console.log(9999);
    // var id = this.getAttribute("id");


}
function checkboxOnclick(val) {
    console.log(val);
}
// 保存模板
function preservation() {
    mui.confirm('', '选择需要保存的模板', ['专场模板', '画像模板'], function (e) {
        if (e.index == 0) {
            mui.prompt('', '输入专场模板', '保存模板', ['取消', '确定'], function (e) {
                if (e.index == 0) {

                } else if (e.index == 1) {

                }

            });
        } else if (e.index == 1) {
            mui.prompt('', '输入画像模板', '保存模板', ['取消', '确定'], function (e) {
                if (e.index == 0) {

                } else if (e.index == 1) {

                }

            });
        }
    })
 
}
mui(".suoke_header").on('tap', '#show_moban', function () {
    mui('.mui-off-canvas-wrap').offCanvas().show();
})
mui(".suoke_header").on('tap', '#close_moban', function () {
    mui('.mui-off-canvas-wrap').offCanvas().close();
})

mui("#stionTbale").on('tap', '.buttoss', function () {
    let key = this.getAttribute("type");

    switch (key) {
        case "s":
            console.log("筛选");
            break;
        case "x":
            console.log("详情");
            location.href = "../views/template_details.html";
            break;
        case "c":
            console.log("删除");

            break;
        default:
            break;
    }
})