lastNum = sessionStorage.getItem("key");
console.log(JSON.parse(lastNum));
roles = JSON.parse(lastNum);
var t = sessionStorage.getItem("day")
console.log(sessionStorage.getItem("day"))
console.log(sessionStorage.getItem("step"))
killdata = JSON.parse(sessionStorage.getItem("killdata"));
$('.back1').click(function () {
    window.location.href = "法官日记.html"
})
var fsmev = new StateMachine({
    init: 'none',
    transitions: [{
            name: 'step1',
            from: 'none',
            to: 'one'
        },
        {
            name: 'step2',
            from: 'one',
            to: 'two'
        },
        {
            name: 'step3',
            from: 'two',
            to: 'three'
        },
        {
            name: 'step4',
            from: 'three',
            to: 'four'
        },
        {
            name: 'step0',
            from: 'four',
            to: 'none'
        },

    ],
    methods: {
        onStep1: function () {
            $('.killDetail').show();
            $('.kill').addClass("another");
            $('.kill .trangle').addClass("border-another");
        },
        onStep2: function () {
            $('.deathWords').addClass("another");
            $('.deathWords .trangle').addClass("border-another");
        },
        onStep3: function () {
            $('.playerWords').addClass("another");
            $('.playerWords .trangle').addClass("border-another");
        },
        onStep4: function () {
            $('.voteDetail').show();
            $('.vote').addClass("another");
            $('.vote .trangle').addClass("border-another");
        },
    }
});
for (n = 0; n < sessionStorage.getItem("day"); n++) {
    $('.main').append("<div class='day'><div class='date'>第<span class='daynum'></span>天</div><div class='trangle'></div><div class='events'><div class='kill'><img src='素材/moon.png'><div class='trangle'></div>杀手杀人</div><div class='killDetail detail'><span class='shift'></span>号玩家被杀死，其身份是<span class='shift'></span></div><div class='deathWords'><img src='素材/sun.png' alt=''><div class='trangle'></div>亡灵发表遗言</div><div class='playerWords'><div class='trangle'></div>玩家依次发言</div><div class='vote'><div class='trangle'></div>全民投票</div><div class='voteDetail detail'><span class='shift'></span>号玩家被投死，其身份是<span class='shift'></span></div><span class='pic'></span></div></div>")
}
$('div[class=day]:last').prevAll().children('.events').children('div').not($('.detail')).addClass("another");
$('div[class=day]:last').prevAll().children('.events').find('.trangle').addClass("border-another");
$('div[class=day]:last').prevAll().children('.events').find('.detail').show();
if (sessionStorage.getItem("step") == 1) {
    fsmev.step1()
} else if (sessionStorage.getItem("step") == 2) {
    fsmev.step1();
    fsmev.step2();
} else if (sessionStorage.getItem("step") == 3) {
    fsmev.step1();
    fsmev.step2();
    fsmev.step3();
} else if (sessionStorage.getItem("step") == 4) {
    fsmev.step1();
    fsmev.step2();
    fsmev.step3();
    fsmev.step4();
    fsmev.step0();
    $('div[class=day]:last').children('.events').children('div').removeClass("another");
    $('div[class=day]:last').children('.events').find('.trangle').removeClass("border-another");
    $('div[class=day]:last').children('.events').find('.detail').hide();
}
$('div[class=day]:last').prevAll().children('.date').nextAll().hide();
$('.date').click(function () {
    console.log(11111)
    $(this).nextAll().show();
    $('.date').not($(this)).nextAll().hide();
})
console.log(killdata)
if (killdata) {
    for (i = 0; i < killdata.length; i++) {
        $('.shift').eq(i).html(killdata[i])
    }
    $('span:contains("-1")').parent().html("杀手未进行任何操作")
}
var chinese = ["二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六"];
for (w = 0; w < sessionStorage.getItem("day"); w++) {
    $('.daynum').eq(w).html(chinese[w]);
}
$('.kill').click(function () {
    if (!fsmev.is("none")) {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else if ($(this).attr("class") == "kill another") {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else {
        sessionStorage.setItem('step', 1)
        fsmev.step1();
        window.location.href = "杀手杀人.html"

    }
});
$('.deathWords').click(function () {
    if (!fsmev.is("one")) {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else if ($(this).attr("class") == "deathWords another") {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else {
        bootbox.confirm("请死亡玩家亮明身份并发表遗言!", function (result) {
            if (result) {
                sessionStorage.setItem('step', 2)
                fsmev.step2();
            }
        });
    }
})
$('.playerWords').click(function () {
    if (!fsmev.is("two")) {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else if ($(this).attr("class") == "playerWords another") {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else {
        bootbox.confirm("请玩家依次发言!", function (result) {
            if (result) {
                sessionStorage.setItem('step', 3)
                fsmev.step3();
            }
        });
    }
});
$('.vote').click(function () {
    if (!fsmev.is("three")) {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else if ($(this).attr("class") == "vote another") {
        bootbox.confirm("请按步骤进行游戏!", function (result) {});
    } else {
        sessionStorage.setItem('step', 4)
        window.location.href = "杀手杀人.html"
        fsmev.step4();
        t++;
        sessionStorage.setItem('day', t);
    }
})
$('.footer2').click(function () {
    window.location.href = "法官日记返回.html"
})
$('.close1').click(function () {
    bootbox.confirm("确定要结束游戏吗？", function (result) {
        if (result) {
            window.location.href = "结果页.html"
        }
    });
})
$('.footer1').click(function () {
    bootbox.confirm("确定要结束游戏吗？", function (result) {
        if (result) {
            window.location.href = "结果页.html"
        }
    });
})
  