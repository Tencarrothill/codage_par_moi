$('document').ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 4500,
            disableOnInteraction: true,
        },
        loop: true,
        navigation: {
            nextEl: '.visual .btn_next',
            prevEl: '.visual .btn_prev',  
        },
    
    });//visual_swiper
    /* 
        일시정지 버튼 클릭시,
        팝업은 일시정지, 일시정지 버튼은 숨김처리
        재생 버튼은 나타남

        재생 버튼 클릭시,
        팝업이 다시 재싱됨, 재생 버튼은 숨김처리
        일시정지 보튼은 나타남
    */
   $('.visual .btn_wrap button.btn_pause').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
   })//btn_pause
   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap button.btn_pause').show()
    })//btn_play

    /* 전시 홍보 섹션 */
    const exh01_swiper = new Swiper('.exhibit .tab .exh01 .swiper', {
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
            640: {
                spaceBetween: 30, 
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }); //exh01
    const exh02_swiper = new Swiper('.exhibit .tab .exh02 .swiper', {
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
            640: {
                spaceBetween: 30, 
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }); //exh02
})//document