$(document).ready(function () {

	//    $(".gnb-wrap .menu-box ul li").click(function () {
	//
	//        if ($(this).hasClass("active")) {
	//            $(this).removeClass("active");
	//        } else {
	//            $(".gnb-wrap .menu-box ul li").removeClass("active");
	//            $(this).addClass("active");
	//        }
	//    });




	$('.main-slider > .slider-wrap').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
	});

	$('.category-wrap>.category-slider > .category').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
		nextArrow: "<button type='button' class='slick-next'>Next</button>",
		arrows: true,
        
        
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1320, //화면 사이즈 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1228, 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 990, 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 615, 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 4
                }
            },
            
        ]
        
        
        
        
	});



	$(".wrap > .con").slick({
		slidesToShow: 3,
		slidesToScroll: 8,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
        
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1320, //화면 사이즈 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
        
        
	});




	$('.photo-review-wrap > .review-con').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,
		centerMode: false,
		focusOnSelect: false,
		arrows: true,
        
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1320, //화면 사이즈 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
        
        
        
	});

    $(".top-btn").click(function () {

        $("html , body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {

        var $scrollTop = $(this).scrollTop();

        console.log($scrollTop);

        if ($scrollTop > 1000) {
            $(".top-btn").css({
                opacity: 1,
                visibility: "visible",
            })
        } else {
            $(".top-btn").css({
                opacity: 0,
                visibility: "hidden",
            })
        }
    });

});


$(function () {
	var lastScrollTop = 0,
		data = 5;
	$(window).scroll(function (e) {
		var st = $(this).scrollTop();

		if (Math.abs(lastScrollTop - st) <= data) {
			return;
		}
		if ((st > lastScrollTop) && (lastScrollTop > 0)) {
			$(".wrapp").css("top", "-160px");

		} else {
			$(".wrapp").css("top", "0px");
		}
		lastScrollTop = st;
	});
    
    
    
    
    
    $(".mobile-nav-list1 >li > a").click(function(){
		$(this).next("ul").slideToggle();
		$(this).parent().siblings().removeClass("active").find("ul").slideUp(500);
	});
	
    $('.menuIconBox').click(function(){
       $('.hide-menuBpx').addClass('active');
    });
    $('.close-btn').click(function(){
         $('.hide-menuBpx').removeClass('active');
    })
});



