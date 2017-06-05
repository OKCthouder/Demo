/**
 * Created by Simple_Y on 2017/5/30.
 */
$(function () {
    var topPosition = "<div id='top'></div>"; //定义顶部锚点的标签
    var goToTopButton = "<p id='goToTop'><a href='#top'><span></span></a></p>"; //定义按钮标签
    $("div.container").prepend(topPosition); //在container的div最前面加上锚点标签
    $("div.container").append(goToTopButton); //在container的div最后面加上按钮标签
    $("#goToTop").hide(); //首先将#goToTop隐藏
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#goToTop").fadeIn(1500);
            } else {
                $("#goToTop").fadeOut(1500);
            }
        }); //当点击跳转链接后，回到页面顶部位置
        $("#goToTop").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
});