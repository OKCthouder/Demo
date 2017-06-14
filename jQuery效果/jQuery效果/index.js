/**
 * Created by Gentle_Y on 2017/3/14.
 */
$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide(1000);
    });
    $("#show").click(function () {
        $("p").show(1000);
    });
    $("#toggle").click(function () {
        $("p").toggle(1000);
    });
});