$('document').ready(function(){
    let window_w
    let mobile_size = 640
    let pc_m

    function reszie_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){
            pc_m = 'pc'
        }else{
            pc_m = 'm'
        }
        console.log(pc_m)
    }
    reszie_chk() // document 로딩완료 시 1번 실행
    $(window).resize(function(){
        reszie_chk()
    })

	const myswiper = new Swiper('.myswiper', {
		slidesPerView: "1",
		spaceBetween: 20,
		
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
				grid: {
					rows: 3,
					fill: 'string',
				},
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 2,
				grid: {
					rows: 2,
					fill: 'string',
				},
				//slidesPerColumn:2
			},
		},
		loop: false,
		autoplay: {delay: 2500, disableOnInteraction: false,},
		navigation: {
			nextEl: '.btn_wrap .next',
			prevEl: '.btn_wrap .prev',
		},
	});
	
	if(pc_m == 'm'){
		myswiper.disable()
	}else{
		myswiper.enable()
	}
	$(window).resize(function(){
		if(pc_m == 'm'){
			myswiper.disable()
		}else{
			myswiper.enable()
		}
	});
	
})//document.ready