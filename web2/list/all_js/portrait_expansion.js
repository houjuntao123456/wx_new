mui(".mui-content").on('tap', '.upPhoto', function () {
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
    document.getElementById("photoUp").setAttribute("src", base64_YS);
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


function checkboxOnclick(val) {
    console.log(val);
}