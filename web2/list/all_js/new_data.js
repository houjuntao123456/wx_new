var Now_tims ="";
var Old_year="";
(function(){
    var myDate = new Date();
    var Now_year = myDate.getFullYear();
    var Now_month = myDate.getMonth() + 1;
    var Now_time_datar = myDate.getDate();
    if (Now_month >= 1 && Now_month <= 9) {
        Now_month = "0" + Now_month;
    }
    if (Now_time_datar >= 1 && Now_time_datar <= 9) {
        Now_time_datar = "0" + Now_time_datar;
    }
    Now_tims = Now_year + "-" + Now_month + "-" + Now_time_datar; //当前时间
    Old_year = (Now_year - 1) + "-" + Now_month + "-" + Now_time_datar; //一年前
})();