$('#input').focusin(function () {
    $(this).addClass("new");//输入框得到焦点就变黄色
});
$('#input').blur(function () {//失去焦点判断输入的值在不在范围内
    $(this).removeClass("new");
     typeIn = $('#input').val();
     a = $('.changeKiller').html();
     b = $('.changeNormal').html();
     b = typeIn - a;
    if (3 < typeIn && typeIn <= 5) {
        var a = 1;     
    } else if (6 <= typeIn && typeIn <= 8) {
        var a = 2;
    } else if (9 <= typeIn && typeIn <= 11) {
        var a = 3;
    } else if (12 <= typeIn && typeIn <= 15) {
        var a = 4;
    } else if (16 <= typeIn && typeIn < 19) {
        var a = 5;
       
    } else {
        $('.changeKiller').html("");
        $('.changeNormal').html("");
        $('#input').val("");
        return false;
    }//分情况分配杀手的人数
    if (a) {
        $('.changeKiller').html(a);
        $('.changeNormal').html(b);
        $('#input').val(typeIn);
    }
})

$('.go').click(function () {
    var typeIn = $('#input').val();
    if (typeIn) { //判断输入值有没有被设为空，如果是空就弹窗提示
        var a = $('.changeKiller').html();
        var b = $('.changeNormal').html();
        var new_num1 = new Array();
        for (m = 0; m < a; m++) {
            new_num1[m] = "1";
        }
        var new_num2 = new Array();
        for (n = 0; n < b; n++) {
            new_num2[n] = "0";
        }

        new_num1.push.apply(new_num1, new_num2);//按照先杀手后平民顺序排队放进一个数组
        t = new_num1[9]
        for (var i = typeIn; i--;) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = new_num1[i];
            new_num1[i] = new_num1[j];
            new_num1[j] = temp;//把杀手和平民打乱顺序
        }
        var nextPage = JSON.stringify(new_num1);
        sessionStorage.setItem("key", nextPage);//把洗好的数组保存，待后面的页面取用

        window.location.href = "翻牌1.html" //不是空就跳转

    } else {
        $('#myModal').modal('show');
    }
    console.log(new_num1[9], new_num1[10], new_num1[11], new_num1[12], new_num1[13], new_num1[14])
})

$('.canel,.confirm').click(function () { //点完弹窗按钮后弹窗要消失
    $('#myModal').modal('hide');
})