/**
 * Created by Gentle_Y on 2017/3/15.
 */
$(document).ready(function () {
    $(".main>a").click(function () {
        var ulNode = $(this).next("ul");
        // if(ulNode.css("display")=="none"){
        //     ulNode.css("display","block");
        // }
        // else {
        //     ulNode.css("display","none");
        // }
        // ulNode.show();
        // ulNode.hide();
        // ulNode.toggle("normal");//数字、slow。normal。fast
        // ulNode.slideDown();
        // ulNode.slideUp();
        ulNode.slideToggle();
        changeIcon($(this));
    });

    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    }, function () {
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
    });
});

function changeIcon(mainNode) {
    if(mainNode){
        if(mainNode.css("background-image").indexOf("collapsed.gif")>=0){
            mainNode.css("background-image","url('image/expanded.gif')");
        }else {
            mainNode.css("background-image","url('image/collapsed.gif')");
        }
    }
}