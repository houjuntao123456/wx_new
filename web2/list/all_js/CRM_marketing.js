// 区域滚动
mui('.mui-scroll-wrapper').scroll();
var all = '';
var alls = [{
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

var guwen = '';
var guwens = [{
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
function classification(val) {
    switch (val.getAttribute("val")) {
        case 'all':
            let picker1 = new mui.PopPicker();
            picker1.setData(alls);
            picker1.pickers[0].setSelectedValue(all, 2000);
            picker1.show(function (SelectedItem) {
                console.log(SelectedItem);
                all = SelectedItem[0].value;
                val.innerHTML = SelectedItem[0].text;
            })
            break;
        case 'guwen':
            let picker2 = new mui.PopPicker();
            picker2.setData(guwens);
            picker2.pickers[0].setSelectedValue(guwen, 2000);
            picker2.show(function (SelectedItem) {
                console.log(SelectedItem);
                guwen = SelectedItem[0].value;
                val.innerHTML = SelectedItem[0].text;
            })
            break;
        
        default:
            console.log(9999);
    }
}