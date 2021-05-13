// 点击选择分类
function classification(val) {
    let dtpicker1 = new mui.DtPicker({
        type: "date",//设置日历初始视图模式 
        beginDate: new Date(2015, 04, 25),//设置开始日期 
        endDate: new Date(2016, 04, 25),//设置结束日期 
        labels: ['年', '月', '日'],//设置默认标签区域提示语 
    })
    dtpicker1.show(function (e) {
        val.innerHTML = e.text;
    })
}