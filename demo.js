$('.details').hide();
$('.details:last').show()
$('li').click(function () {
    var idx = $(this).index();
    $(this).addClass("active");
    $('li').not($('li').eq(idx)).removeClass("active");
    $('.details').eq(idx).show();
    $('.details').not($('.details').eq(idx)).hide();
})

$('.link').mouseenter(function () {
    $('ul').css("visibility", "hidden");
    $('.details p').css("visibility", "hidden");
    $('.details').css("border", "none")
})
$('.link').mouseout(function () {
    $('ul').css("visibility", "visible")
    $('.details p').css("visibility", "visible");
    $('.details').css("border", "1px solid #337ab7")
})
$('.link').on('touchstart', function () {
    $('ul').css("visibility", "hidden")
    $('.details p').css("visibility", "hidden");
    $('.details').css("border", "none")
})
$('.link').on('touchend', function () {
    $('ul').css("visibility", "visible")
    $('.details p').css("visibility", "visible");
    $('.details').css("border", "1px solid #337ab7")
})
$('.details:last').click(function () {
    window.location.href="杀手游戏.html"
})
$('.details').eq(4).click(function () {
    window.location.href = "表单验证.html"
})
$('.details').eq(5).click(function () {
    window.location.href = "九宫格跑马灯.html"
})
$('.details').eq(3).click(function () {
    window.location.href = "折叠效果.html"
})
$('.details').eq(2).click(function () {
    window.location.href = "留言板（live 事件）.html"
})
$('.details').eq(1).click(function () {
    window.location.href = "（工具）鼠标拖拽.html"
})
$('.details').eq(0).click(function () {
    window.location.href = "回到顶部和底部.html"
})