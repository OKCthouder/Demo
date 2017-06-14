/**
 * Created by Gentle_Y on 2017/3/14.
 */
$(document).ready(function () {
   $("button").click(function () {
       $("p").hide(1000,function () {
           alert("回调");
       });
       $("p").css("color","red").slideUp(1000).slideDown(2000);
   }) ;
});