var mySwiper2 = new Swiper('.swiper-container2', {
	        pagination: '.swiper-pagination2',
	        slideShadows: true,
	        preloadImages: false,
	        effect: 'coverflow',
	        slidesPerView: 1.2,
	        centeredSlides: true,
	        coverflow: {
	            rotate: 0,
	            stretch: 10,
	            depth: 60,
	            modifier: -5,
	            slideShadows: true
	        }
	    });

	    $(".chose1>dl").on("click","dt",function(){

	    	

	    	if($(this).parent().hasClass("switch1")){
	    		$(this).parent().removeClass("switch1");
	    		$(this).parent().find(".checked").removeClass("seriousChecked");
	    		
	    	}else{
	    		$(this).parent().addClass("switch1");
	    		$(this).parent().find(".checked").addClass("seriousChecked");
	    		
	    	}

	    	
	    	if($(".change .switch1").length==0){
	    		$(".gold_fourth").css("background","url(img/zj_1.png)");
				$(".gold_fourth").css("backgroundSize","100% 100%")
	    	}else{
	    		$(".gold_fourth").css("background","url(img/zj.png)");
				$(".gold_fourth").css("backgroundSize","100% 100%")
	    	}

	    })

	    function change(){

	    	/*$.each(,function(i,v){
	    		console.log(i,v)
	    	})*/
	    }

	    $(".chose2>dl").on("click","dt",function(){
	    	if($(this).parent().hasClass("switch2")){
	    		$(this).parent().removeClass("switch2");
	    		$(this).parent().find(".checked").removeClass("ywChecked");
	    		$(".gold_third").css("background","url(img/yw_1.png)");
				$(".gold_third").css("backgroundSize","100% 100%")
	    	}else{
	    		$(this).parent().addClass("switch2");
	    		$(this).parent().find(".checked").addClass("ywChecked");
	    		$(".gold_third").css("background","url(img/yw.png)");
				$(".gold_third").css("backgroundSize","100% 100%");
	    	}
	    })

	    $(".chose3>dl").on("click","dt",function(){
	    	
	    	if($(this).parent().hasClass("switch3")){
	    		$(this).parent().removeClass("switch3");
	    		$(this).parent().find(".checked").removeClass("rsChecked");
	    		$(".gold_second").css("background","url(img/rs_1.png)");
				$(".gold_second").css("backgroundSize","100% 100%")
	    	}else{
	    		$(this).parent().addClass("switch3");
	    		$(this).parent().find(".checked").addClass("rsChecked");
	    		$(".gold_second").css("background","url(img/rs.png)");
				$(".gold_second").css("backgroundSize","100% 100%");

	    	}
	    })
	     
	      $(".serious_btn").on("click",function(){
	  			if($(this).hasClass("seriousCheckedBtn")){
		      		$(this).removeClass("seriousCheckedBtn");
		      		$(".gold_txt>li").eq(3).find("i").hide();
		      	}else{
		      		$(this).addClass("seriousCheckedBtn");
		      		$(".gold_txt>li").eq(3).find("i").show();

		      	}
	      		
	      })
	       $(".yw_btn").on("click",function(){
	  			if($(this).hasClass("ywCheckedBtn")){
		      		$(this).removeClass("ywCheckedBtn");
		      		$(".gold_txt>li").eq(2).find("i").hide();
		      	}else{
		      		$(this).addClass("ywCheckedBtn");
		      		$(".gold_txt>li").eq(2).find("i").show();
		      	}
	      		
	      })
	        $(".rs_btn").on("click",function(){
	  			if($(this).hasClass("rsCheckedBtn")){
		      		$(this).removeClass("rsCheckedBtn");
		      		$(".gold_txt>li").eq(1).find("i").hide();
		      	}else{
		      		$(this).addClass("rsCheckedBtn");
		      		$(".gold_txt>li").eq(1).find("i").show();
		      	}
	      		
	      })
	      $(".info_list>ul").on("click","li",function(){
	      		var index = $(this).index(),
	      			wd = $(this).width();
	      			$(".line").css("transform","translateX("+index*wd+"px)");
	      			$(".main>div").eq(index).show().siblings().hide();

	      		
	      })
	      $(".write").on("click",function(){
				$(".bg").show();
				var value = $(".num").val();
				//console.log($(this).parent().find("span").text())
				//$(this).parent().find("span").text()==value;
		})
	      $(".sure").on("click",function(){
				$(".bg").hide();
				var v=$(this).prev().find(".num").val();			
				$("span[title='0']").html(v);
		})
