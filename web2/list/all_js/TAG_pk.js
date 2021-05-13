
    function serahs() {
        mui('#sheet3').popover('toggle');
    }
    function selects() {
        mui('#sheet3').popover('toggle');
        console.log("查询");
    }

    var store = '';
    var stores = [{
        value: "first",
        text: "门店1"
    }, {
        value: "second",
        text: "门店2"
    }]
    var staff = '';
    var staffs = [{
        value: "first",
        text: "员工1"
    }, {
        value: "second",
        text: "员工2"
    }]
    var group = '';
    var groups = [{
        value: "first",
        text: "组名1"
    }, {
        value: "second",
        text: "组名2"
    }]
    // 规格信息
    function classification(val) {

        switch (val.getAttribute("val")) {
            case 'organization':
                document.getElementById("wuxian").classList.remove("display_none")
                break;
            case 'store':
                document.getElementById("cover").classList.add("mengban")
                let store = new mui.PopPicker();
                store.setData(stores);
                store.pickers[0].setSelectedValue(store, 2000);
                store.show(function (SelectedItem) {
                    document.getElementById("cover").classList.remove("mengban")
                    console.log(SelectedItem);
                    store = SelectedItem[0].value;
                    val.innerHTML = SelectedItem[0].text;
                })
                break;
            case 'staff':
                document.getElementById("cover").classList.add("mengban")
                let staff = new mui.PopPicker();
                staff.setData(staffs);
                staff.pickers[0].setSelectedValue(staff, 2000);
                staff.show(function (SelectedItem) {
                    document.getElementById("cover").classList.remove("mengban")
                    console.log(SelectedItem);
                    staff = SelectedItem[0].value;
                    val.innerHTML = SelectedItem[0].text;
                })
                break;
            case 'group':
                document.getElementById("cover").classList.add("mengban")
                let group = new mui.PopPicker();
                group.setData(groups);
                group.pickers[0].setSelectedValue(group, 2000);
                group.show(function (SelectedItem) {
                    document.getElementById("cover").classList.remove("mengban")
                    console.log(SelectedItem);
                    group = SelectedItem[0].value;
                    val.innerHTML = SelectedItem[0].text;
                })
                break;
            default:
                console.log(9999);
        }
        mui(".mui-poppicker-header").on('tap', '.mui-poppicker-btn-cancel', function () {
            document.getElementById("cover").classList.remove("mengban");
        })
        // mui(".mui-dtpicker-header").on('tap', '.mui-btn', function () {
        //     document.getElementById("cover").classList.remove("mengban");
        // })
    }


    window.onload = function () {
        document.getElementById("TAG_title").innerHTML = decodeURIComponent(getQueryVariable("type"));
        switch (decodeURIComponent(getQueryVariable("type"))) {
            case '门店PK':
                console.log('门店');
                document.getElementById("pk_store").classList.remove("display_none");
                break;
            case '员工PK':
                 console.log('员工PK');
                document.getElementById("pk_store").classList.remove("display_none");
                document.getElementById("pk_staff").classList.remove("display_none");
                break;

            default:
                break;
        }

    }

    mui(".pk_centerss").on('tap', '.details', function () {
        //获取id
        // var id = this.getAttribute("id");
        location.href = "./TAG_pk_details.html?type=" + decodeURIComponent(getQueryVariable("type")) + "";
    })

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    mui.init({
        pullRefresh: {
            container: '#pullrefresh',
            up: {
                contentrefresh: '正在加载...',
                auto: false,//可选,默认false.首次加载自动上拉刷新一次
                callback: pullupRefresh
            }
        }
    });
    /**
     * 上拉加载具体业务实现
     */
    // 重新开启加载
    // mui('#pullrefresh').pullRefresh().refresh(true);
    // 分页计数
    var count = 0;
    // 分的条数
    var limit_num = 30;

    function pullupRefresh() {
        setTimeout(function () {
            mui('#pullrefresh').pullRefresh().endPullupToRefresh((count > (count / limit_num))); //参数为true代表没有更多数据了。
            console.log('加载');
        }, 1000);
    }
