var outPutData;
var dateTime;
var booksdata;

var Rule_url; //路由
var rfm_type; //控制类型
var type_string;
var json_j = [];
// var y_tltle = "";
// var x_title = "";
// var z_title = ""
// app.title = '环形图';
var myChart = echarts.init(document.getElementById('main'), 'light');
var ttt = document.getElementById("ttt")
function rfm_echarts() {
    myChart.off('click');
    if (ttt.innerHTML == "RFM") {
        booksdata = ['流失', '休眠', '睡眠', '沉默', '常规', '活跃'];

    } else if (ttt.innerHTML == "F回头率分析") {

        booksdata = ['无', '超低回头率', '低回头率', '中回头率', '高回头率', '超高回头率'];


    } else if (ttt.innerHTML == "M贡献度分析") {
        booksdata = ['无', '超低价值', '低价值', '中价值', '高价值', '超高价值'];



    } else if (ttt.innerHTML == "I忠诚度分析") {
        booksdata = ['无', '超低转介绍', '低转介绍', '中转介绍', '高转介绍', '超高转介绍'];



    } else if (ttt.innerHTML == "N高件数分析") {
        booksdata = ['无', '超低件数', '低件数', '中件数', '高件数', '超高件数'];



    } else if (ttt.innerHTML == "P高客单分析") {
        booksdata = ['无', '超低客单价', '低客单价', '中客单价', '高客单价', '超高客单价'];



    } else if (ttt.innerHTML == "A高件单分析") {
        booksdata = ['无', '超低价位', '低价位', '中价位', '高价位', '超高价位'];



    } else if (ttt.innerHTML == "J高连带分析") {
        booksdata = ['无', '超低连带率', '低连带率', '中连带率', '高连带率', '超高连带率'];


    } else if (ttt.innerHTML == "C高消费分析") {
        booksdata = ['无消费', '超低消费', '低消费', '中消费', '高消费', '超高消费'];
    }



    let option = {
        tooltip: {
            trigger: '', //item
            // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            // x: 'left',
            // y: 'top',
            // top: '5%',
            left: 'center',

            // data: ['无消费', '超低消费', '低消费', '中消费', '高消费', '超高消费']

        },

        series: [
            {
                name: '单位/人数',
                type: 'pie',
                selectedMode: 'single',
                radius: ['95%', '5%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'inner',
                        formatter: '{b}\n\n{c}' //\n{d}%
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 1255, name: '广告' },
                    { value: 1500, name: '天真' },
                    { value: 1658, name: '开心' },
                    { value: 1988, name: '霸气' },
                    { value: 3622, name: '课啊' },
                ]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option, true);
    //增加监听事件
    function eConsole(param) {
        var mes = '【' + param.type + '】';
        if (typeof param.seriesIndex != 'undefined') {
            // mes += '  seriesIndex : ' + param.seriesIndex;
            // mes += '  dataIndex : ' + param.dataIndex;
            if (param.type == 'click') {
                console.log(param);
                let percent = param.percent; //百分比
                let value = param.value; //数量
                let type = param.name; //类型
                document.getElementById("actives").innerHTML = type;
                document.getElementById("num_people").innerHTML = value;
                document.getElementById("percent").innerHTML = percent;
                return true;
            }

        }
    }
    myChart.on("click", eConsole);


}
rfm_echarts();
var rfm_type = localStorage.getItem("rfm_type");
var rfm_mechanism = localStorage.getItem("rfm_mechanism");


window.onload = function () {
    switch (rfm_type, rfm_mechanism) {
        case 'R', 'company':
            ttt.innerHTML = "活跃度";

            break;
        case 'R', 'store':
            ttt.innerHTML = "活跃度";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'R', 'organization':
            ttt.innerHTML = "活跃度";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'F', 'company':
            ttt.innerHTML = "回购率";
            break;
        case 'F', 'store':
            ttt.innerHTML = "回购率";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'F', 'organization':
            ttt.innerHTML = "回购率";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'M', 'company':
            ttt.innerHTML = "贡献度";
            break;
        case 'M', 'store':
            ttt.innerHTML = "贡献度";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'M', 'organization':
            ttt.innerHTML = "贡献度";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'I', 'company':
            ttt.innerHTML = "忠诚度";
            break;
        case 'I', 'store':
            ttt.innerHTML = "忠诚度";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'I', 'organization':
            ttt.innerHTML = "忠诚度";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'N', 'company':
            ttt.innerHTML = "高件数";
            break;
        case 'N', 'store':
            ttt.innerHTML = "高件数";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'N', 'organization':
            ttt.innerHTML = "高件数";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'P', 'company':
            ttt.innerHTML = "高客单";
            break;
        case 'P', 'store':
            ttt.innerHTML = "高客单";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'P', 'organization':
            ttt.innerHTML = "高客单";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'A', 'company':
            ttt.innerHTML = "高件单";
            break;
        case 'A', 'store':
            ttt.innerHTML = "高件单";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'A', 'organization':
            ttt.innerHTML = "高件单";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'J', 'company':
            ttt.innerHTML = "高连带";
            break;
        case 'J', 'store':
            ttt.innerHTML = "高连带";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'J', 'organization':
            ttt.innerHTML = "高连带";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        case 'C', 'company':
            ttt.innerHTML = "高消费";
            break;
        case 'C', 'store':
            ttt.innerHTML = "高消费";
            document.getElementById("store").classList.remove("display_none");
            select_store(rfm_type, rfm_mechanism)
            break;
        case 'C', 'organization':
            ttt.innerHTML = "高消费";
            document.getElementById("v_organization").classList.remove("display_none");
            // select_organization(rfm_type, rfm_mechanism);
            break;
        default:
            console.log(9999);
    }
}

// mui(".mui-poppicker-header").on('tap', '.mui-poppicker-btn-cancel', function () {
//     document.getElementById("cover").classList.remove("mengban");
// })
// mui(".mui-dtpicker-header").on('tap', '.mui-btn', function () {
//     document.getElementById("cover").classList.remove("mengban");
// })
// 选择组织
function select_organization(type, cc) {
    // zNodes = [];
    // for (let index = 0; index < 5; index++) {
    //     let json = {
    //         name: "first" + index,

    //         value: "first" + index,
    //         text: type + cc + index
    //     }
    //     stores.push(json);
    // }

}
// 选择门店
var store = '';
var stores = []

function select_store(type, cc) {
    for (let index = 0; index < 5; index++) {
        let json = {
            value: "first" + index,
            text: type + cc + index
        }
        stores.push(json);
    }
}
mui(".suoke_header").on('tap', '#v_organization', function () {
    document.getElementById("wuxian").classList.remove("display_none");
})
mui(".suoke_header").on('tap', '#store', function () {
    let val = this;
    let picker2 = new mui.PopPicker();
    picker2.setData(stores);
    picker2.pickers[0].setSelectedValue(store, 2000);
    picker2.show(function (SelectedItem) {
        console.log(SelectedItem);
        store = SelectedItem[0].value;
        val.innerHTML = SelectedItem[0].text;
    })
})