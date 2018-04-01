$(window).load(function () {
    lastNum = sessionStorage.getItem("key");
    console.log(JSON.parse(lastNum));
    roles = JSON.parse(lastNum);
    $('.role').hide();
    $('.king').show();
    $('.border p').hide();
    $('#deliver').hide();
    $('#watch').show();
})

$('.footer').click(function () {
    var a = parseInt($('.number').html());
    if ($('.role').is(':hidden')) {
        $('.role').show();
        $('.king').hide();
        $('.footer span').html(a + 1);
        $('#deliver').show();
        $('#watch').hide();
        $('.border p').show();
    } else {
        $('.role').hide();
        $('.king').show();
        $('.border p').hide();
        $('#deliver').hide();
        $('#watch').show();
        $('.number').html(a + 1);
    }

    console.log(roles[a - 1]);
    if (roles[a - 1] == 0) {
        $('.border p').html("平民")
    } else if (roles[a - 1] == 1) {
        $('.border p').html("杀手")
    }
    if (a == roles.length && $('.king').is(':hidden')) {
         $('.footer').html("法官查看")
    }
    if (a == roles.length && $('.role').is(':hidden')) {  
        window.location.href = "法官日记.html"
    }
})

$('.back').click(function () {
    var a = parseInt($('.number').html());
    if ($('.role').is(':hidden')) {
        $('.role').show();
        $('.king').hide();
        $('.number').html(a - 1);
        $('#deliver').show();
        $('#watch').hide();
        $('.footer span').html(a);
        $('.border p').show();

    } else {
        $('.role').hide();
        $('.king').show();
        $('.border p').hide();
        $('#deliver').hide();
        $('#watch').show();
        $('.footer span').html(a);
    }
    console.log(roles[a - 2]);
    if (roles[a - 2] == 0) {
        $('.border p').html("平民")
    } else if (roles[a - 2] == 1) {
        $('.border p').html("杀手")
    }
    if (a - 1 == 0 && $('.king').is(':hidden')) {
        window.location.href = "index.html"
    }
});


// var click = 0; b =click+1;
// $('.footer').click(function () {
//     click++;
//     b = b;
//     if (click % 2 == 1) {
//         b = b;
//         $('.king').hide();
//         $('.role').show();
//         $('.border p').show();
//         $('#deliver').show();
//         $('#watch').hide();
//         $('.footer span').html(b + 1);
//     } else if (click % 2 == 0) {
//         b = b + 1;
//         $('.role').hide();
//         $('.king').show();
//         $('.border p').hide();
//         $('#deliver').hide();
//         $('#watch').show();
//         $('.footer span').html(b);
//     }
//     if (roles[b - 1] == 0) {
//         $('.border p').html("平民")
//     } else if (roles[b - 1] == 1) {
//         $('.border p').html("杀手")
//     }
//     $('.number').html(b);
//     if (click >= roles.length * 2 - 1) {
//         $('.footer').addClass("next").html("法官查看")
//         $('.next').click(function () {
//             window.location.href = "法官日记.html"
//         })
//     }
//     // console.log(click);

// });
// $('.back').click(function () {
//     if ($('.role').is(':hidden')) {
//     console.log(1)
//     } else {
//     console.log(2)   
// }
// })