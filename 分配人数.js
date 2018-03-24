window.onresize = function () {
    location.reload();
}
$(window).load(function () {　　
    h = $('.point').offset().left;
});

h = $('.point').offset().left;
console.log(h)
var newSet = function () {
    var typeIn = $('#input').val();
    var a = $('.changeKiller').html();
    var b = $('.changeNormal').html();
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

    } //分情况分配杀手的人数
    if (a) {
        var b = typeIn - a;
        $('.changeKiller').html(a);
        $('.changeNormal').html(b);
        $('#input').val(typeIn);
    };//输入符合调教，就给杀手和平民赋值人数
};

$('#input').keyup(function () {
    var typeIn = $('#input').val();
    var a = $('.changeKiller').html();
    var b = $('.changeNormal').html();
    var newPos = new Object();
    newPos.top = $('.point').offset().top;
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
        newPos.left = h;
        console.log(newPos.left);
        $('.point').offset(newPos);
        return false;
    }
    //这里与上面重复，本想通过一个函数调用过来，但是试过几次都有bug
    if (a) {
        var b = typeIn - a;
        $('.changeKiller').html(a);
        $('.changeNormal').html(b);
        $('#input').val(typeIn);
    };
    var d = typeIn - 4;
    newPos.left = h + (d * 15);
    newPos.top = $('.point').offset().top;
    $('.point').offset(newPos);
//这段代码是根据输入的值让滑块按钮走到对应的点上
});
//下面则是点击加号减号按钮改变输入的值大小同时改变滑块按钮的位置
$('.plus').click(function () {
    var typeIn = $('#input').val();
    var a = $('.changeKiller').html();
    var b = $('.changeNormal').html();
    if (typeIn == "") {
        typeIn = 4;//这里强行让输入框的值等于4，防止如果输入的值不符合条件，会影响后面输入框值变化的运算
        $('#input').val(typeIn);
    }
    newPos = new Object();
    newPos.left = $('.point').offset().left + 15;
    newPos.top = $('.point').offset().top;
    if (newPos.left - h > 210) {
        newPos.left = h + 210
    }//这里多滑块的最右端做了限制，不让它超出导轨的长度
    $('.point').offset(newPos);
    typeIn++;
    if (typeIn > 18) {
        typeIn = 18
    }
    $('#input').val(typeIn);
    newSet(typeIn);

});
$('.minus').click(function () {
    var typeIn = $('#input').val();
    var a = $('.changeKiller').html();
    var b = $('.changeNormal').html();
    newPos = new Object();
    newPos.left = $('.point').offset().left - 15;
    newPos.top = $('.point').offset().top;

    if (newPos.left < h) {
        newPos.left = h
    }//这里限制了最右端的位置

    $('.point').offset(newPos);
    console.log($('.point').offset());
    typeIn--;
    if (typeIn < 4) {
        typeIn = 4
        return false;
    };
    $('#input').val(typeIn);//同时输入框的值相应变化
    newSet(typeIn);

});


$('#input').focusin(function () {
    $(this).addClass("new"); //输入框得到焦点就变黄色
});
$('#input').blur(function () {
    $(this).removeClass("new");
});
//下面是手指点击选中按钮滑动绑定的事件，然后进行拖拽特效。
$('.point').on('touchstart', function (event) {
    event.preventDefault();
    x1 = event.originalEvent.touches[0].pageX - $('.point').offset().left;
    $(document).bind('touchmove', move);
    console.log(x1);
    return false;
});

function move(event) {
    event.preventDefault();
    var typeIn = $('#input').val();
    var a = $('.changeKiller').html();
    var b = $('.changeNormal').html();
    newPos = new Object();
    newPos.left = Math.round((event.originalEvent.touches[0].pageX - x1) / 15) * 15;
    newPos.top = $('.point').offset().top;
    if (newPos.left - h < 0) {
        newPos.left = h
    }
    if (newPos.left - h > 210) {
        newPos.left = h + 210
    }
    $('.point').offset(newPos);
        //下面表示在拖拽完成后立即根据移动的数值，计算输入框能数值的变化
    s = Math.round((newPos.left - h) / 15);
    $('#input').val(s + 4);
    typeIn = s + 4;
    newSet(typeIn);
    return false;
};
$(document).on('touchend', function () {
    // event.preventDefault();
    $(document).unbind('touchmove', move);
});
//下面是词组正则验证，我自己加了“长度不少于6位”“不能含有空格”“两组词不能相同”3个要求
$('.go').click(function () {
    var citizen = $('.citizen').val();
    var ghost = $('.ghost').val();
    var check=true
    if (citizen.length < 6 || ghost.length<6) {
        $('.shift').html("词组不能少于6位")
        $('#myModal').modal('show');
        check = false
    } else if (citizen.match(/\s/) || ghost.match(/\s/)) {
        $('.shift').html("词组不能有空格")
        $('#myModal').modal('show');
        check = false
    }else if (citizen == ghost) {
        $('.shift').html("词组不能相同")
        $('#myModal').modal('show');
        check = false
    }

    var typeIn = $('#input').val();
    if (typeIn) { //判断输入值有没有被设为空，如果是空最后就弹窗提示
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

        new_num1.push.apply(new_num1, new_num2); //按照先杀手后平民顺序排队放进一个数组
        t = new_num1[9]
        for (var i = typeIn; i--;) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = new_num1[i];
            new_num1[i] = new_num1[j];
            new_num1[j] = temp; //把杀手和平民打乱顺序
        }
        var nextPage = JSON.stringify(new_num1);
        sessionStorage.setItem("key", nextPage); //把洗好的数组保存，待后面的页面取用
        if (check) {
             window.location.href = "翻牌1.html" //跳转
        }
       

    } else {
        $('#myModal').modal('show');
    }
})

$('.canel,.confirm').click(function () { //点完弹窗按钮后弹窗要消失
    $('#myModal').modal('hide');
    location.reload();//弹窗出现表示不符合条件，为了省事，确认弹窗后页面刷新
});