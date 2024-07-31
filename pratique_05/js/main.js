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
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 24, 
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,
        navigation: {
            nextEl: '.exhibit .tab .exh01 .btn_wrap .next',
            prevEl: '.exhibit .tab .exh01 .btn_wrap .prev',
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
            nextEl: '.exhibit .tab .exh02 .btn_wrap .next',
            prevEl: '.exhibit .tab .exh02 .btn_wrap .prev',
        },
    }); //exh02
    //전시 홍보 섹션

    /* exhibit의 tab_menu
        .exhibit .tab>ul>li을 클릭 시, li:class="on" 추가될 것임.
        일단 html에 기본적으로 하나의 li에 class="on"이 있어야 함.
        jquery에서 li 클릭 시, class="on"이 다른 li에 이동되게 하는 능력을 부여할 것임. */
    $('.exhibit .tab>ul>li').on('click', function(){
        $('.exhibit .tab>ul>li').removeClass('on') /* 모든 li로부터 class="on" 삭제 명령을 내리는 것 */
        $(this).addClass('on') /* click한 나 자신li에만 class="on" 추가 */
    })
})//document