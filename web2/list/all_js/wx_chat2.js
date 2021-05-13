
        // var vConsole = new VConsole();
       
        // 发送图片
        var send_image = document.getElementById("msg-image");
        var picture_src = "";
        // 图片上传
        mui("#msg-image")[0].addEventListener("tap", function () {
            $('#upload_picture').click();
            // 清空图片储存
            base64_YS = "";
            // 清空文件储存
            file_File = "";
            // 清除图片路径
            picture_src = "";
        });
        function send_true() {
            // var data = new FormData();
            // data.append('code', code);
            // data.append('model', 'weixin');
            // data.append('file', file_File);
            // // data.append('img_txt', mui("#text_area")[0].value);
            // $.ajax({
            //     data: data,
            //     type: "POST",
            //     url: '/index.php/UserlistWxSendOutImage/',
            //     cache: false,
            //     contentType: false,
            //     processData: false,
            //     success: function (data) {
            //         mui('#img_sheet2').popover('toggle');
            //         if (data.code == 400) {
            //             mui.toast(data.msg, {
            //                 duration: 'long',
            //                 type: 'div'
            //             })
            //         } else {
                        //将内容显示到界面上
            mui('#img_sheet2').popover('toggle');
                        Question_data_images_voice('<img class="Answer_data_img" src="' + base64_YS + '" alt="" width="150px">');
            //         }
            //     },
            //     error: function (xhr) {
            //         mui.toast('照片选择失败,请重新选择!', {
            //             duration: 'long',
            //             type: 'div'
            //         });
            //     }
            // }, 'JSON');
        }

        // 上传图片
        function show_picture() {
            document.getElementById("img__show").setAttribute("src", base64_YS);
            mui('#img_sheet2').popover('show');
        }
        // 图片压缩
        var file_File = ""; //接收file变量
        var base64_YS = "";//接收压缩的base64编码
        function uploadImageHandle(File_domain, Multiple) {
            // 创建实例
            var reader = new FileReader();
            var img = document.createElement('img');
            // 读取上传的图片的信息(lastModified, lastModifiedDate, name, size, type等)
            var file = File_domain.files[0];
            // 记下上传的图片的name, 后面会用到
            var flieName = File_domain.files[0].name;
            // 记下上传的图片的类型, 后面会用到
            var fileType = file.type;
            // 生成canvas画布
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            // MDN: 该方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，
            // readyState 会变成已完成（DONE），并触发 loadend 事件，
            // 同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
            // 也就是说, 将File对象转化为base64位字符串
            reader.readAsDataURL(file);
            // 上一步是异步操作, 读取完成后会执行onload事件, 而base64的字符串在e.target.rusult中
            reader.onload = function (e) {
                // 获得图片dom
                var base64 = e.target.result
                img.src = base64;
                //  console.log(base64.length+ base64);
                //   create_content(789, '的暑假', base64);
            };

            img.onload = function () {
                // 图片原始尺寸
                var originWidth = this.width;
                var originHeight = this.height;

                // 最大尺寸限制
                var maxWidth = this.width * Multiple,
                    maxHeight = this.height * Multiple;
                // 目标尺寸
                var targetWidth = originWidth,
                    targetHeight = originHeight;
                // 图片尺寸超过800x800的限制
                if (originWidth > maxWidth || originHeight > maxHeight) {
                    if (originWidth / originHeight > maxWidth / maxHeight) {
                        // 更宽，按照宽度限定尺寸
                        targetWidth = maxWidth;
                        targetHeight = Math.round(
                            maxWidth * (originHeight / originWidth)
                        );
                    } else {
                        targetHeight = maxHeight;
                        targetWidth = Math.round(
                            maxHeight * (originWidth / originHeight)
                        );
                    }
                }
                // canvas对图片进行缩放
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                // 清除画布
                context.clearRect(0, 0, targetWidth, targetHeight);
                // 将图片划到canvas上
                context.drawImage(img, 0, 0, targetWidth, targetHeight);
                // 把canvas转成base64格式并去除头
                var base64 = canvas
                    .toDataURL(fileType)
                // .replace(/^data:image\/(jpeg|jpg|png|gif);base64,/, '');
                base64_YS = base64;
                file_File = base_flie(base64, flieName);

                // });
                show_picture();
            };


        }


        function base_flie(dataurl, filename) {//将base64转换为文件
            var arr = dataurl.split(',');
            var mime = arr[0].match(/:(.*?);/)[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
        }



    // var hd = window.parent.document.getElementById("nav");
    // hd.style.display = "none";
    // var hh = window.parent.document.getElementsByClassName("mui-iframe-wrapper");
    // hh[0].style.bottom = "0px";
    var loc = location.href;
    var n1 = loc.length;
    var n2 = loc.indexOf('=');
    var code = decodeURI(loc.substr(n2 + 1, n1 - n2));
    // 点击笑脸按钮显示图标列表
    document.getElementById("msg-pengyouquan").onclick = function () {
        close_TB();
    }
    //点击图标触发的事件
    mui("#facebox").on('tap', 'img', function () {
        mui("#msg-send")[0].style.display = "";
        mui("#msg-image")[0].style.display = "none";
        // 获取id
        var value = this.getAttribute("value");
        var jj = code_name(value);
        // 文本框内容
        document.getElementById("msg-text").value = document.getElementById("msg-text").value + code_name(value);
        close_TB();

    })
    //开关表情
    function close_TB() {
        if (document.getElementById("section_bq").classList.contains("display")) {
            document.getElementById("section_bq").classList.remove('display');
        } else {
            document.getElementById("section_bq").classList.add('display');
            $('#content_chat')[0].style.bottom = "50px";
            $('#content_chat')[0].style.paddingTop = "50px";
        }
    }
    // 时间日期转化
    var time_data = [];
    function add_time_data(Time) {
        time_data.push(Time);
        // <p style="text-align: center;">2018-12-09</p>
        // console.log( time_data[time_data.length - 1]+600);
        if (time_data.length == 1) {
            var p = document.createElement("p") //创造节点
            p.style = "text-align: center;";
            p.innerHTML = timeConvert(time_data[0], 1)
            content_chat.appendChild(p);
        }

        if (time_data[time_data.length - 2] + 600 < Time) {
            var p = document.createElement("p") //创造节点
            p.style = "text-align: center;";
            p.innerHTML = timeConvert(Time, 1)
            content_chat.appendChild(p);
        }



    }
    function timeConvert(timestamp, num) {//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳 
        timestamp = timestamp + '';
        timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
        var date = new Date(timestamp);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        if (num == 0) {
            return y + '-' + m + '-' + d;
        } else {
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
        }
    }

    var time = "";
    // 获取收到的数据,将数据显示到界面(回答数据)
    var kkk = true;
    // 获取数据和将数据显示到对话框
    function qq() {
        mui.post('/index.php/UserlistWxChatRecord/', {
            code: code,
            createtime: time,
            company: $.cookie("company")
        }, function (data) {
            if (data.code == 200) {
                if (data.data == "null" || data.data == null || data.data == "" || data.data == " ") {
                    // 暂无数据
                } else {
                    time = data.data[data.data.length - 1].createTime;
                    for (let i = 0; i < data.data.length; i++) {
                        if (data.data[i].toUser == "null" || data.data[i].toUser == null) {
                            //管理员说的话
                            if (kkk) {
                                // Question_data(data.data[i].content);
                                if (data.data[i].msgType == 'image') {
                                    Question_data_images_voice('<img class="Answer_data_img" src="' + data.data[i].img + '" alt="" width="150px">');
                                } else if (data.data[i].msgType == "voice") {
                                    Question_data_images_voice('<audio id="myAudio" controls style="width:200px;"><source src="' + data.data[i].voice + '" type="audio/mp3"></audio>')
                                } else {
                                    Question_data(data.data[i].content);
                                }
                                // 时间筛选
                                if (data.data[i].content == "null" || data.data[i].content == null) {
                                } else {
                                    add_time_data(data.data[i].createTime);
                                }
                            }
                        } else {
                            //用户说的话
                            // console.log("用户")
                            if (data.data[i].msgType == 'image') {
                                // 图片
                                Answer_data_image_voice('<img class="Answer_data_img" src="' + data.data[i].img + '" alt="" width="150px">');
                            } else if (data.data[i].msgType == "voice") {
                                console.log(i)
                                // 语音
                                Answer_data_image_voice('<audio id="myAudio" controls style="width:200px;"><source src="' + data.data[i].voice + '" type="audio/mp3"></audio>')
                            } else {
                                // 文字和表情
                                Answer_data(data.data[i].content);
                            }
                            // 时间筛选
                            if (data.data[i].content == "null" || data.data[i].content == null) {
                            } else {
                                add_time_data(data.data[i].createTime);

                            }
                        }

                    }
                    kkk = false;
                    // console.log(time_data)
                }
            }
            //服务器返回响应，根据响应结果，分析是否登录成功；
        }, 'json'
        );

    }
    qq();

    // 截取[]间的内容
    function code_name(str) {
        str = str.substring(str.indexOf("[") + 1, str.indexOf("]"))
        return str;
    }

    String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    }

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    function replace_em(str) {
        // console.log(TB.length)
        for (let x = 0; x < TB.length; x++) {
            // str += i;
            str = str.replaceAll(escapeRegExp(TB[x].icon), '<img src="' + TB[x].image + '" border="0"/>');
        }
        return str;
    }



    $(function () {
        $("#msg-text").bind('input porpertychange', function () {
            if (this.value.length < 13) {
                mui("#section_bottom")[0].style.minHeight = '50px';
                $('#content_chat')[0].style.bottom = "50px";
                $('#content_chat')[0].style.paddingTop = "50px";
            } else if (this.value.length >= 13) {
                mui("#section_bottom")[0].style.minHeight = '70px';
                $('#content_chat')[0].style.bottom = "70px";
                $('#content_chat')[0].style.paddingTop = "70px";
            } else if (this.value.length >= 26) {
                mui("#section_bottom")[0].style.minHeight = '100px';
                $('#content_chat')[0].style.bottom = "100px";
                $('#content_chat')[0].style.paddingTop = "100px";
            } else {

            }
        });

    });

    // var vConsole = new VConsole();
    // 点击话筒图标需进行操作
    // mui("#msg-mic")[0].addEventListener("tap", function () {
    //     // 输入框隐藏,语音开启
    //     mui("#msg-text")[0].style.display = "none";
    //     mui("#msg-sound")[0].style.display = "";
    //     // 语音图标隐藏,输入图框显示
    //     mui("#msg-bars")[0].style.display = ""
    //     mui("#msg-mic")[0].style.display = "none";
    //     // close();
    // });
    // 点击扩展图标需进行操作
    mui("#msg-bars")[0].addEventListener("tap", function () {
        // 输入框开启,语音隐藏
        mui("#msg-text")[0].style.display = "";
        mui("#msg-sound")[0].style.display = "none";
        // 扩展标隐藏,语音标显示
        mui("#msg-bars")[0].style.display = "none";
        mui("#msg-mic")[0].style.display = "";
    });
    // 获取焦点发送按钮显示,拍照图标隐藏
    mui("#msg-text")[0].onfocus = function () {
        mui("#msg-send")[0].style.display = "";
        mui("#msg-image")[0].style.display = "none";



    }
    //失去焦点 离开弹框如果内容无长度,则隐藏发送按钮,拍照图标显示
    mui("#msg-text")[0].onblur = function () {
        if (this.value.length == 0) {
            mui("#msg-send")[0].style.display = "none";
            mui("#msg-image")[0].style.display = "";
        }
    }
    //  发送过后,按钮隐藏,拍照图标显示,
    mui("#msg-send")[0].addEventListener("tap", function () {
        var str = $("#msg-text").val();
        $("#msg-2").html(replace_em(str));
        //将数据传递到后台
        button_send(str);
        //将内容显示到界面上
        // Question_data(str);
        // 获取当前时间的时间戳
        add_time_data(Math.round(new Date() / 1000));
    })



    //按钮发送执行的操作
    function button_send(str) {
        mui("#msg-send")[0].style.display = "none";
        mui("#msg-image")[0].style.display = "";
        mui("#msg-text")[0].value = "";
        mui("#section_bottom")[0].style.minHeight = '50px';
        $('#content_chat')[0].style.bottom = "50px";
        $('#content_chat')[0].style.paddingTop = "50px";

        // mui.post('/index.php/UserlistWxSendOutTxt/', {
        //     code: code,
        //     content: str,
        //     // company: $.cookie("company")
        // }, function (data) {
        //     //服务器返回响应，根据响应结果，分析是否登录成功；
        //     if (data.code == 400) {
        //         mui.toast(data.msg, {
        //             duration: 'long',
        //             type: 'div'
        //         })
        //     } else {
                //将内容显示到界面上
                Question_data(str);
        //     }
        // }, 'json'
        // );

    }


    var content_chat = document.getElementById("content_chat"); //获取内容ID
    // 获取text的数据.将数据发送到界面(提问数据)
    //自己说的话
    function Question_data(data) {
        var div = document.createElement("div") //创造节点
        div.className = "question";
        div.innerHTML = '<div class="right">'
            + '<div class="heard_img">'
            + '<img src="' + $.cookie("headImgUrl") + '">'
            + '</div>'
            + '<div class="question_Name">客服</div>'
            + '</div>'
            + '<div class="question_text clear" style="max-width: 70%;">'
            + '<p>' + replace_em(data) + '</p>'
            + '<i></i>'
            + '</div>'
        content_chat.appendChild(div);
        di();
    }
    //   图片和语音
    function Question_data_images_voice(data) {
        var div = document.createElement("div") //创造节点
        div.className = "question";
        div.innerHTML = '<div class="right">'
            + '<div class="heard_img">'
            + '<img src="' + $.cookie("headImgUrl") + '">'
            + '</div>'
            + '<div class="question_Name">客服</div>'
            + '</div>'
            + '<div class="question_text clear" style="max-width: 70%;">'
            + '<p>' + data + '</p>'
            + '<i></i>'
            + '</div>'
        content_chat.appendChild(div);
        di();
    }

    var timename = setInterval(function () {
        mui.post('/index.php/UserlistWxChatRecord/', {
            code: code,
            createtime: time,
            company: $.cookie("company")
        }, function (data) {
            if (data.code == 200) {
                if (data.data == "null" || data.data == null) {
                    // 暂无数据
                } else {
                    if (data.data.length == 0) {
                        // 触发
                    } else {
                        time = data.data[data.data.length - 1].createTime;
                        for (var i = 0; i < data.data.length; i++) {
                            if (data.data[i].toUser == "null" || data.data[i].toUser == null) {
                                //管理员说的话
                                if (kkk) {
                                    if (data.data[i].msgType == 'image') {
                                        Question_data_images_voice('<img class="Answer_data_img" src="' + data.data[i].img + '" alt="" width="150px">');
                                    } else if (data.data[i].msgType == "voice") {
                                        console.log(i)
                                        Question_data_images_voice('<audio id="myAudio" controls style="width:200px;"><source src="' + data.data[i].voice + '" type="audio/mp3"></audio>')
                                    } else {
                                        Question_data(data.data[i].content);
                                    }
                                    // 时间筛选
                                    if (data.data[i].content == "null" || data.data[i].content == null) {
                                    } else {
                                        add_time_data(data.data[i].createTime);
                                    }
                                }
                            } else {
                                //用户说的话
                                if (data.data[i].msgType == 'image') {
                                    // 图片
                                    Answer_data_image_voice('<img class="Answer_data_img" src="' + data.data[i].img + '" alt="" width="150px">');
                                } else if (data.data[i].msgType == "voice") {
                                    // 语音
                                    Answer_data_image_voice('<audio id="myAudio" controls style="width:200px;"><source src="' + data.data[i].voice + '" type="audio/mp3"></audio>')
                                } else {
                                    // 文字和表情
                                    Answer_data(data.data[i].content);
                                }
                                // 时间筛选
                                if (data.data[i].content == "null" || data.data[i].content == null) {
                                } else {
                                    add_time_data(data.data[i].createTime);

                                }
                            }

                        }
                        kkk = false;

                    }
                }
            }
            //服务器返回响应，根据响应结果，分析是否登录成功；
        }, 'json'
        );
    }, 10000);

    //公众号说的话
    // 点击图片放大图片
    mui("#content_chat").on('tap', '.Answer_data_img', function () {
        document.getElementById("picture_div").classList.remove("display");
        document.getElementById("picture_div_img").src = this.src;
    })
    // 关闭图片放大图片
    document.getElementById("picture_div").onclick = function () {
        document.getElementById("picture_div").classList.add("display");
    }
    // Answer_data("天龙盖地虎,宝塔镇河妖");
    function Answer_data(data) {
        if (data == null) {
        } else {
            var div = document.createElement("div") //创造节点
            div.className = "answer";
            div.innerHTML = '<div class="left">'
                + '<div  class="heard_huida">'
                + '<img src="' + localStorage.getItem("data_photo") + '">'
                + '</div>'
                + '<div class="answer_Name">' + localStorage.getItem("username") + '</div>'
                + '</div>'
                + '<div class="answer_text clear" style="max-width: 70%;">'
                + '<p>' + replace_em(data) + '</p>'
                + ' <i></i>'
                + '</div>'
            content_chat.appendChild(div);
        }

    }
    // 图片 , 语音
    function Answer_data_image_voice(data) {
        if (data == null) {
        } else {
            var div = document.createElement("div") //创造节点
            div.className = "answer";
            div.innerHTML = '<div class="left">'
                + '<div  class="heard_huida">'
                + '<img src="' + localStorage.getItem("data_photo") + '">'
                + '</div>'
                + '<div class="answer_Name">' + localStorage.getItem("username") + '</div>'
                + '</div>'
                + '<div class="answer_text clear" style="max-width: 70%;">'
                + '<p>' + data + '</p>'
                + ' <i></i>'
                + '</div>'
            content_chat.appendChild(div);
        }

    }



    // 苹果手机采用CSS1
    if (/iphone/i.test(navigator.userAgent)) {
        document.body.addEventListener('focusin', () => {
            //软键盘弹起事件 
            close();
            di();
            document.querySelector('#msg-text').scrollIntoView();
        })

        document.body.addEventListener('focusout', () => {
            //软键盘关闭事件 
            document.activeElement.scrollIntoViewIfNeeded(true); // 解决苹果不回弹页面 关键
        })

    }

    // // 安卓手机采用CSS2
    // // 安卓手机采用CSS2
    var winHeight = $(window).height();
    if (/android/i.test(navigator.userAgent)) {
        // alert("安卓");
        $(window).resize(function () {
            var thisHeight = $(this).height();
            if (winHeight - thisHeight > 50) {
                //窗口发生改变(大),故此时键盘弹出
                //当软键盘弹出，在这里面操作
                close();
                di()
            } else {

            }
        });

    }
    //页面滚动到底端
    function di() {
        var scrollHeight = mui('#content_chat')[0].scrollHeight;
        mui('#content_chat')[0].scrollTop = scrollHeight;
    }
    function close() {
        if (document.getElementById("section_bq").classList.contains("display") != true) {
            document.getElementById("section_bq").classList.add('display');
            $('#content_chat')[0].style.bottom = "50px";
            $('#content_chat')[0].style.paddingTop = "50px";
        }
    }
