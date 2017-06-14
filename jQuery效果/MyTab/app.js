/**
 * Created by Gentle_Y on 2017/3/15.
 */
$(document).ready(function () {
   $("#tabFirst li").each(function (index) {
       var liNode = $(this);
       $(this).mouseover(function () {
          timeoutid = setTimeout(function () {
              $("div.content").removeClass("content");
              $("#tabFirst li.tabin").removeClass("tabin");
              $("div").eq(index).addClass("content");
              liNode.addClass("tabin");
          },300);
       }).mouseout(function () {
           clearTimeout(timeoutid);
       });
   });

   $("#realcontent").load("mytab.html");
   $("#tabsecond li").each(function (index) {
       $(this).click(function () {
           $("#tabsecond li.tabin").removeClass("tabin");
           $(this).addClass("tabin");
           if(index==0){
               $("#realcontent").load("mytab.html");
           }else if(index==1){
               $("#realcontent").load("tabload.jsp h2");
           }else if(index==2) {
               $("#realcontent").load("tabload.jsp");
           }

       })
   })
});