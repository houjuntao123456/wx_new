var load = new Loading();
load.init();
// 获取openid
// var vConsole = new VConsole();
//手机端IOS系统微信中软键盘兼容
var all_content = document.getElementById("all_content");
var iii = document.getElementsByTagName("input");
$(function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var ua = window.navigator.userAgent.toLowerCase();
    if (isAndroid) {
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            $("input").focus(function () {
                setTimeout(function () {
                    all_content.style.top = "1%";
                    // fcss.style.paddingTop = "25%";
                    // foler.style.display = "none";
                }, 100);
            });
        }
    } else if (isiOS) {
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {

            $("input").focus(function () {
                setTimeout(function () {
                    all_content.style.top = "3%";
                    // fcss.style.paddingTop = "22%";
                    // foler.style.display = "none";
                }, 100);
            });

        }
    }
});

$("input").blur(function () {
    setTimeout(function () {
        all_content.style.top = "12%";
        // fcss.style.paddingTop = "30%";
        // foler.style.display = "";
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        document.activeElement.scrollIntoViewIfNeeded(true);
    }, 100);
});

$(function () {
    //微信内置浏览器浏览H5页面弹出的键盘遮盖文本框的解决办法 
    window.addEventListener("resize", function () {
        if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
            window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        }
    })
})


//提交进行验证
var member_num = document.getElementById("member_num"); //密码
var username = document.getElementById("username"); //用户名

function opk() {
    username.type = 'text';
}
opk();

function submission() {
    if (member_num.value == "" && username.value == "") {
        location.href = "./member/member_index_centent.html";
        mui.alert('用户名和密码不能为空', '提示', '确定'['div']);
    } else if (username.value == "") {
        mui.alert('用户名不能为空', '提示', '确定'['div']);
    } else if (member_num.value == "") {
        mui.alert('密码不能为空', '提示', '确定'['div']);
    } else {
        login();
        //登录
    }
}
function login(){
    location.href="./index_main.html"
}
//去除空格
function trim(str) {
    return str = str.replace(/\s*/g, "");
    // return str.replace(/(^\s*)|(\s*$)/g, "");
}
