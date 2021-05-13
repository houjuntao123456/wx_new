// 方案存放
var storage_programme = [];
function S_programme(val) {
    console.log(val);
    console.log(Date.now());
    let json = {
        id: Date.now(),
        text: val
    }
    storage_programme.push(json);
    add_pro(Date.now(), val)
    console.log(storage_programme);

}
// 新增方案
function add_pro(ids, val) {
    let div = document.createElement("div");
    div.id = 'suoke' + ids;
    div.style="padding-top:15px";
    div.innerHTML = ' <div class="programme">'
        + ' <p>' + val + '</p>'
        + ' <div>'
        + ' <img id="imgs' + ids + '" class="imgss" src="../images/fangan.png" alt="">'
        + '</div>'
        + ' <p class="add_shop" ids="shop' + ids + '">添加商品</p>'
        + ' </div>'
        + ' <div id="shop' + ids + '">'
        // + ' <div class="mui-row boder-bott" >'
        // + '  <div class="mui-col-sm-4 mui-col-xs-4">'
        // + ' <img src="../images/mark.png" alt="" width="100px" height="100px"'
        // + ' style="margin-top:52px;">'
        // + '   </div>'
        // + '   <div class="mui-col-sm-8 mui-col-xs-8 ctxt">'
        // + '  <p>名称：雪尼尔外套</p>'
        // + '   <p>货号：20154658789746544654</p>'
        // + '<p>条码：74546546</p>'
        // + '  <p>规格：褐色 xl</p>'
        // + ' <p>售价：888.88</p>'
        // + ' </div>'
        // + '    </div>'
        // + '<div class="mui-row boder-bott">'
        // + ' <div class="mui-col-sm-4 mui-col-xs-4">'
        // + ' <img src="../images/mark.png" alt="" width="100px" height="100px"'
        // + ' style="margin-top:52px;">'
        // + '</div>'
        // + ' <div class="mui-col-sm-8 mui-col-xs-8 ctxt" >'
        // + '       <p>名称：雪尼尔外套</p>'
        // + ' <p>货号：20154658789746544654</p>'
        // + ' <p>条码：74546546</p>'
        // + ' <p>规格：褐色 xl</p>'
        // + '  <p>售价：888.88</p>'
        // + '  </div>'
        // + '</div>'
        + ' </div>'
        + ' <div class="core">'
        + ' <div>核心卖点</div>'
        + '  <div>'
        + ' <textarea id="suoke_core" class="textArea" name="" placeholder="填写每个产品的核心卖点"></textarea>'
        + '</div>'
        + ' <div>TOP(时间,地点,场合)</div>'
        + ' <div>'
        + '  <textarea id="suoke_top" class="textArea" name="" placeholder="填写搭配适合的时间,地点,场合,给顾客营造一种穿着场景"></textarea>'
        + '</div>'
        + '  <div>整体搭配(上,中,下,里,外)</div>'
        + '  <div>'
        + '  <textarea id="suoke_collocation" class="textArea" name="" placeholder="写出搭配顺序及搭配方案给顾客,一种身临其境的搭配效果"></textarea>'
        + ' </div>'
        + '<div>顾客可能问题</div>'
        + ' <div>'
        + ' <textarea id="suoke_question" class="textArea" name="" placeholder="填写顾客可能提出的异议"></textarea>'
        + ' </div>'
        + ' <div>回答话术</div>'
        + ' <div>'
        + '   <textarea id="suoke_answer" class="textArea" name="" placeholder="填写异议解答话术"></textarea>'
        + '</div>'
        + '</div>'
    document.getElementById("suoke_fangan").appendChild(div);
}
// 删除方案
function delete_pro(ids, val) {
    let box = document.getElementById('suoke' + ids);
    box.remove();

}
mui(".genjin").on('tap', '.scfa', function () {
    if (storage_programme.length == 0) {
        mui.toast('无方案可删除', { duration: 'long', type: 'div' })
    } else {
        let picker4 = new mui.PopPicker();
        picker4.setData(storage_programme);
        picker4.show(function (SelectedItem) {
            delete_pro(SelectedItem[0].id, SelectedItem[0].text);
            storage_programme.forEach((index, y) => {
                if (index.id == SelectedItem[0].id) storage_programme.splice(y, 1);
            });
        })
    }

})
mui("#pullrefresh").on('tap', '.select_txt', function () {
    document.getElementById("choice_kh").innerHTML = this.getAttribute("name");
    mui('.mui-off-canvas-wrap').offCanvas().close();
})

mui("#pullrefresh2").on('tap', '.boder-bott', function () {
    // let ids = this.getAttribute("ids");
    console.log(this);
    let div = document.createElement("div");
    div.classList = "mui-row boder-bott";
    div.innerHTML = this.innerHTML;
    document.getElementById(add_shop_ids).appendChild(div);
    mui('.mui-off-canvas-wrap').offCanvas().close();
})

mui("#sheet3").on('tap', '.queren', function () {
    document.getElementById("choice_dg").innerHTML = this.getAttribute("name");
    mui('#sheet3').popover('toggle');
})


var add_imgs_ids = '';
mui(".mui-scroll-wrapper").on('tap', '.imgss', function () {
    console.log(this);
    add_imgs_ids = this.getAttribute("id");
    console.log(add_imgs_ids);
    document.getElementById("upload_picture").value = "";
    $('#upload_picture').click();
    // 清空图片储存
    base64_YS = "";
    // 清空文件储存
    file_File = "";
})
// 图片压缩
var file_File = ""; //接收file变量
var base64_YS = "";//接收压缩的base64编码
var arra_id = "";  //存储id
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
        shangchuan_picture();
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
function shangchuan_picture() {
    console.log(add_imgs_ids);
    console.log(document.getElementById(add_imgs_ids));
    document.getElementById(add_imgs_ids).setAttribute("src", base64_YS);
    var data = new FormData();
    data.append('file', file_File);
    data.append('model', 'vips');
    console.log('9999');
    // $.ajax({
    //     data: data,
    //     type: "POST",
    //     url: '/index.php/UserlistUploadImg/',
    //     cache: false,
    //     contentType: false,
    //     processData: false,
    //     success: function (data) {
    //         if (JSON.parse(data).code == 200) {
    //             document.getElementById("updown_text").classList.add("dis_yin"); //上传文件字体隐藏
    //             document.getElementById("updown_picture").classList.remove("dis_yin"); //照片显示区域显示
    //             document.getElementById("updown_picture").setAttribute("src", base64_YS); //更改图片路径
    //             load.stop();
    //         } else if (JSON.parse(data).code == 400) {
    //             mui.toast(JSON.parse(data).msg, {
    //                 duration: 'long',
    //                 type: 'div'
    //             });
    //             load.stop();
    //         }
    //     },
    //     error: function (xhr) {
    //         mui.toast('照片上传失败,请重新选择!', {
    //             duration: 'long',
    //             type: 'div'
    //         });
    //         load.stop();
    //     }
    // }, 'JSON');
}
