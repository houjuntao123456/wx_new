mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


function serahs() {
    mui('#sheet3').popover('toggle');
}
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

var shop = '';
var shops = [{
    value: "first",
    text: "商品分类1"
}, {
    value: "second",
        text: "商品分类2"
}]


// 规格信息
function classification(val) {

    switch (val.getAttribute("val")) {
        case 'organization':
            document.getElementById("wuxian").classList.remove("display_none")
          
            break;
        case 'shop': //商品分类
            document.getElementById("wuxian2").classList.remove("display_none")
            // document.getElementById("cover").classList.add("mengban")

            // let picker5 = new mui.PopPicker();
            // picker5.setData(shops);
            // picker5.pickers[0].setSelectedValue(shop, 2000);
            // picker5.show(function (SelectedItem) {
            //     document.getElementById("cover").classList.remove("mengban")
            //     console.log(SelectedItem);
            //     shop = SelectedItem[0].value;
            //     val.innerHTML = SelectedItem[0].text;
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



var zTreeObj2;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting2 = {
    callback: {
        beforeClick: zTreeBeforeClick2
    },
    view: {
        // dblClickExpand: dblClickExpand
        dblClickExpand: true
    }
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes2 = [
    {
        name: "test1",
        open: true,
        id: 1,
        children: [
            {
                name: "test1_1",
                open: true,
                id: 1,
                children: [{
                    name: "hgjg"
                }]
            },
            { name: "test1_2", open: true, }
        ]
    },
    {
        name: "test2",
        open: true,
        id: 1,
        children: [
            { name: "test2_1" },
            { name: "test2_2" }
        ]
    }
];
$(document).ready(function () {
    zTreeObj = $.fn.zTree.init($("#treeDemo2"), setting2, zNodes2);
});
function zTreeBeforeClick2(treeId, treeNode, clickFlag) {
    document.getElementById("wuxian2").classList.add("display_none")
    if (treeNode.id === 1) {
        return false
    } else {
        document.getElementById("v_organization2").innerHTML = treeNode.name;
        console.log(treeId);
        console.log(treeNode.name);
        console.log(clickFlag);
    }

}
