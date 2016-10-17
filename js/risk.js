$(".center>ul").on("click","li",function(){
			
		var uls = $(this).parent().attr("for");

		if(uls==1){
			$(this).css("background","#a0d186").siblings().css("background","#fff");
			$(this).css("color","#fff").siblings().css("color","#a0d186")
		}else if(uls==2){
			$(this).css("background","#e3b586").siblings().css("background","#fff");
			$(this).css("color","#fff").siblings().css("color","#e3b586")
		}else if(uls==3){
			$(this).css("background","#a1d3c5").siblings().css("background","#fff");
			$(this).css("color","#fff").siblings().css("color","#a1d3c5")
		}else{
			$(this).css("background","#93bcf4").siblings().css("background","#fff");
			$(this).css("color","#fff").siblings().css("color","#93bcf4")
		}
	})
$(".nextBtn").on("click",function(){
	location.href="report.html"
})