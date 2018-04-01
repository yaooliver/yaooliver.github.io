lastNum = sessionStorage.getItem("key");
roles = JSON.parse(lastNum);
date = sessionStorage.getItem("day");
if (date==null) {
    date=1
}
killdata = JSON.parse(sessionStorage.getItem("killdata"));
console.log(date,killdata)

var  a = 0; b = 0;
for (i = 0; i < roles.length; i++){
    t = roles[i]
    if (t== 0) {
        a++
    } else if (t== 1) {
        b++
    }
}
console.log(a,b)
$('.killer').html(a);
$('.citizen').html(b);
for (m = 0; m < date; m++){
    $('.details').append("<div class='day'><div class='date'>第<span></span>天</div><p>白天：<span class='shift'></span>号玩家被投死，其身份是<span class='shift'></span></p><p>晚上：<span class='shift'></span>号玩家被杀死，其身份是<span class='shift'></span></p></div>");
    $(".date span").eq(m).html(m+1)
}
if (killdata) {
    for (n = 0; n < killdata.length; n++) {
        $('.shift').eq(n).html(killdata[n])
    }
    $('span:contains("-1")').parent().html("杀手未进行任何操作");
    $('span:empty').parent().html("晚上：未进行任何操作");
}
$('.footer,.home').click(function () {  
    sessionStorage.removeItem("day");
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("key");
    sessionStorage.removeItem("killdata");
    window.location.href="index.html"
})


