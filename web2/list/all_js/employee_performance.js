mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
var myChart = echarts.init(document.getElementById('main'), 'light');
//  报表图
var dateTime = ['12-19', '12-55', '33-99', '12-19', '12-55', '33-99'];
var outPutData = ['88', '66', '77', '88', '66', '77'];
function chart() {
    // 指定图表的配置项和数据
    option = {
        title: {
            text: '总部',
            left: 20,
            textStyle: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
            }

        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dateTime,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            show: true,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            top: 45,
            left: 80
        },
        series: [{
            data: outPutData,
            type: 'line',
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.15)',
                    label: {
                        show: true,
                        position: 'inside'
                    }
                }
            },
            smooth: true,
            areaStyle: {
                shadowColor: 'rgba(255, 255, 255, 0.15)',
                shadowBlur: 10
            }
        }]
    };



    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
chart();

function serahs() {
    mui('#sheet3').popover('toggle');
}


var organization = [0, 0, 0];
var organizations = [{
    value: '110000',
    text: '河北店',
    index: 0,
    children: [{
        value: "110101",
        text: "河北-秦皇岛",
        index: 0,
        children: [{
            value: "1100102",
            text: "抚宁",
            index: 0,
        }, {
            value: "1100103",
            text: "海港区",
            index: 1,
        }, {
            value: "1100104",
            text: "洋河道",
            index: 2,
        }]
    },
    {
        value: "110102",
        text: "河北-唐山",
        index: 1,
        children: [{
            value: "1101021",
            text: "迁安",
            index: 0,
        }, {
            value: "1101022",
            text: "滦州",
            index: 1,
        }]
    }]
}, {
    value: '120000',
    text: '天津市',
    index: 1,
    children: [{
        value: "120101",
        text: "和平区",
        index: 0,
        children: [{
            value: "1201010",
            text: "和平区1",
            index: 0,
        }, {
            value: "12010102",
            text: "和平区2",
            index: 1,
        }, {
            value: "12010103",
            text: "和平区3",
            index: 2,
        }]
    }]
}]


var store = '';
var stores = [{
    value: "first",
    text: "门店"
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
    text: "员工"
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
        case 'organization':
            document.getElementById("wuxian").classList.remove("display_none")
            // let picker1 = new mui.PopPicker({
            //     layer: 3
            // });
            // picker1.setData(organizations);
            // picker1.pickers[0].setSelectedIndex(organization[0], 500);
            // picker1.pickers[1].setSelectedIndex(organization[1], 1000);
            // picker1.pickers[2].setSelectedIndex(organization[2], 1500);
            // picker1.show(function (SelectedItem) {
            //     document.getElementById("cover").classList.remove("mengban")
            //     organization = [SelectedItem[0].index, SelectedItem[1].index, SelectedItem[2].index];
            //     val.innerHTML = SelectedItem[2].text;
            // })
            break;
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
        case 'staff':
            document.getElementById("cover").classList.add("mengban")

            let picker3 = new mui.PopPicker();
            picker3.setData(staffs);
            picker3.pickers[0].setSelectedValue(staff, 2000);
            picker3.show(function (SelectedItem) {
                document.getElementById("cover").classList.remove("mengban")
                console.log(SelectedItem);
                staff = SelectedItem[0].value;
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
                beginDate: new Date(Old_year),//设置开始日期 
                endDate: new Date(Now_tims),//设置结束日期 
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
                beginDate: new Date(Old_year),//设置开始日期 
                endDate: new Date(Now_tims),//设置结束日期 
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