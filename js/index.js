 $(".sex>span").on("click",function(){
            var attr = $(this).attr("for");
            if(attr==1){
                $(this).addClass("checkedSexman");
                $(this).siblings().removeClass("checkedSexwoman");
            }
            if(attr==2){
                $(this).addClass("checkedSexwoman");
                $(this).siblings().removeClass("checkedSexman");
            }
            
            
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

$("#dd_2 .dd_ .dd_submit").on("click",function(){
   $(".birthdayYear").addClass("styles");
})

$("#dd_1 .dd_ .dd_submit").on("click",function(){
   $(".birthdayMonth").addClass("styles");
})
$(".next").on("click",function(){
       window.location.href="home_message.html"; 

 })
/*function showItemDiv(item1,item2,fontCont){
    item1.css("display","block");
    item2.html(fontCont);
    var  timer=setTimeout(function(){
          item1.css('display','none');
    },1500);
}
function judge(){
    if($('.sex span').hasClass('checkedSexwoman')==false ){
       alert(1)
    }else{
        alert(2)
    }
    
       // 
}*/

   