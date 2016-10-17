$(".head_uls>li").on("click",function(){
        $(this).css("opacity","1").siblings().css("opacity",".5");
        var idx = $(this).index(),
            wd = $(this).width();
        $(".content>div").eq(idx).show().siblings().hide();
        $(".up").css("transform","translateX("+idx*wd+"px)");
})
$('.birthdayMonth').dateDropper({
        format:'m',
        placeholder:'请输入月份',
        color:'#66c8ba',
        animation:'bounce', 
        lang:'fr',
        borderColor:'#5ebfc3'   

    });
$('.birthdayYear').dateDropper({
    format:'Y',
    minYear:2010,
    maxYear:2030,
    placeholder:'请输入年份',
    color:'#66c8ba',
    animation:'bounce',
    borderColor:'#5ebfc3'
});
 $("#dd_3 .dd_ .dd_submit").on("click",function(){
   $(".birthdayYear").addClass("styles");
})  

$("#dd_1 .dd_ .dd_submit").on("click",function(){
   $(".birthdayMonth").addClass("styles");
  
})
