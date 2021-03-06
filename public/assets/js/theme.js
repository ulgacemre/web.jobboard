(function($){
	jQuery(window).on('load',function(){
		//Window Load
		$('body').removeClass('preload');
		$('body').addClass('loaded');

		//Show Search
		if($('.box-search').length>0){
			$('.box-search form').on('click', function() {
				var $this = $(this);
				$this.parent().addClass("show-search");
				$('.box-search.show-search input[type=text]').css({"width":"200", "visibility":"visible"});
				$('.box-search.show-search input[type=submit]').css({"position":"absolute"});
			});
			$('body').on('click', function(e) {
				if($(e.target).closest('.show-search').length == 0) {
					$('.box-search.show-search input[type=text]').css({"width":"0", "visibility":"hidden"});
					$('.box-search input[type=submit]').css({"position":"initial"});
					$('.box-search').removeClass("show-search");
				}
			});
		}

		//Menu Responsive
		if($(".main-nav").length>0){
			$(".main-nav").on("click","span", function(e){
				$('.main-nav>ul').slideToggle();
				$(this).parent().addClass('blind-nav');
			});			
			$('body').on('click', function(e) {
				if($(e.target).closest('.blind-nav').length == 0) {
					$('.blind-nav ul').fadeOut();
					$('.main-nav').removeClass("blind-nav");
				}
			});
			$('.main-nav>ul li.menu-item-has-children>i').on('click',function(event){
				if($(window).width()<992){
					$('.main-nav>ul li.menu-item-has-children>ul').hide();
					$(this).parent().find('ul').stop().slideToggle();
				}
			});
		}
		

		//Owl Carousel
		if($('.wrap-item').length>0){
			$('.wrap-item').each(function(){
				var data = $(this).data();
				$(this).owlCarousel({
					addClassActive:true,
					stopOnHover:true,
					itemsCustom:data.itemscustom,
					autoPlay:data.autoplay,
					transitionStyle:data.transition, 
					paginationNumbers:data.paginumber,
					navigationText:['<i class="ion-android-arrow-back" aria-hidden="true"></i>','<i class="ion-android-arrow-forward" aria-hidden="true"></i>'],
				});
			});
		}

		//Fix Owl buttons
		if($('.home2-slider').length>0){
			$(".home2-slider .owl-controls").addClass("container");
			if($('.home2-slider .clickable').length>0) {
				$(".clickable").css({
					overflow: 'inherit'
				});
			}
		}
		if($('.top-listing4').length>0){
			$(".top-listing4 .owl-controls").addClass("container");
			if($('.top-listing4 .clickable').length>0) {
				$(".clickable").css({
					overflow: 'inherit'
				});
			}
		}

		//Play Video
		if($('.ads-style3').length>0){
			$('.ads-style3 .video-button').on('click', function(){				
				$(this).parent().parent().find('#my-video').get(0).play();
				var id = '#dialog';				
				//Get the screen height and width
				var maskHeight = $(document).height();
				var maskWidth = $(window).width();
				//Set heigth and width to mask to fill up the whole screen
				$('#mask').css({'width':maskWidth,'height':maskHeight});		
				//transition effect		
				$('#mask').fadeIn(500);	
				$('#mask').fadeTo("slow",0.9);	
				//Get the window height and width
				var winH = $(window).height();
				var winW = $(window).width();
				//Set the popup window to center
				$(id).css('top',  winH/2-$(id).height()/2);
				$(id).css('left', winW/2-$(id).width()/2);
				//transition effect
				$(id).fadeIn(2000);
				//if mask is clicked
				$('#mask').click(function () {
					$(this).hide();
					$('.window').hide();
					$('#my-video').get(0).pause();
				});				
				return false;		
			});
		}
		if($('.video-home3').length>0) {		
			$('.video2').on('click', function () {
				$(this).parent().hide();
				$(this).parent().parent().find('.post-info').hide();
				$(this).parent().parent().find('.bottom-video').show();
				$('#seccond-video').get(0).play();
			});	
		}

		//Back To Top
		$('.scroll-top').on('click',function(event){
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow');
		});
		$('.percentage').each(function(){
			var data = $(this).data();
			// console.log(data);
			$(this).circularloader({
				backgroundColor: "#ffffff",//background colour of inner circle
				fontColor: "#000000",//font color of progress text
				fontSize: "40px",//font size of progress text
				radius: 11,//radius of circle
				progressBarBackground: "#e8e8e8",//background colour of circular progress Bar
				progressBarColor: data.color,//colour of circular progress bar
				progressBarWidth: 3,//progress bar width
				progressPercent: data.value,//progress percentage out of 100
				progressValue:0,//diplay this value instead of percentage
				showText: false,//show progress text or not
				title: "",//show header title for the progress bar
			});
		});
		//Window Scroll
		jQuery(window).on('scroll',function(){
			//Scroll Top
			if($(this).scrollTop()>$(this).height()){
				$('.scroll-top').addClass('active');
			}else{
				$('.scroll-top').removeClass('active');
			}
		});
		
        // rtl-enable
        if($('.rtl-enable').length > 0){
            $('.vc_row[data-vc-full-width="true"]').each(function(){
                var style = $(this).attr('style');
                style = style.replace("left","right");
                $(this).attr('style',style);
            })
        }
	});
})(jQuery); // End of use strict