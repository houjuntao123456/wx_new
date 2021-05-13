
    var type = '';
    var types = [{
        value: "first",
        text: "优惠券"
    }, {
        value: "second",
        text: "折扣劵"
    }, ]
    var fenlei = '';
    var fenleis = [{
        value: "first",
        text: "满100减50"
    }, {
        value: "second",
        text: "满1000减500"
    }]
    function classification(vvv) {
        let val = vvv;
        switch (val.getAttribute("val")) {
            case 'type':
                let picker2 = new mui.PopPicker();
                picker2.setData(types);
                picker2.pickers[0].setSelectedValue(type, 2000);
                picker2.show(function (SelectedItem) {
                    console.log(SelectedItem);
                    type = SelectedItem[0].value;
                    val.innerHTML = SelectedItem[0].text;
                })
                break;
            case 'fenlei':
                let picker3 = new mui.PopPicker();
                picker3.setData(fenleis);
                picker3.pickers[0].setSelectedValue(fenlei, 2000);
                picker3.show(function (SelectedItem) {
                    console.log(SelectedItem);
                    fenlei = SelectedItem[0].value;
                    val.innerHTML = SelectedItem[0].text;
                })
                break;

            default:
                break;
        }
    }
