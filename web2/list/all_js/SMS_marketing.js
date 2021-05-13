mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


$(function () {
    $('#textArea').bind('input propertychange', function () {
        // input_length = this.value.length
        // $('#result').html($(this).val().length + ' characters');
        // 跟据文本框进行刷新
        document.getElementById("zishu").innerHTML = this.value.length
    });
})

mui("#xinxi").on('tap', '.xz', function () {
    console.log(99999);
    console.log(this.getAttribute("value"));
    console.log(document.getElementById("textArea"));
    document.getElementById("textArea").value = this.getAttribute("value");
    document.getElementById("zishu").innerHTML = document.getElementById("textArea").value.length
})