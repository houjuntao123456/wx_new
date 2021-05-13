
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
    text: "门店2"
},]
var staff = '';
var staffs = [{
    value: "first",
    text: "员工"
}, {
    value: "second",
    text: "员工2"
},]
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

mui(".gridtable").on('tap', '.see', function () {
    location.href ="./DAT_staff_achievements_see.html"
})