/* header, footer와 같이 공통요소에 들어가는 jquery는 이 곳에 코딩 */
$('document').ready(function(){
    /* 페이지가 스크롤되면 header:class=fixed 추가
        다시 맨 위로 올라가면 header:class=fixed 삭제 */
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    /* browser width가 1024이하면 모바일, 이상이면 pc */
    let pc_mobile // 현재 상태가 pc or mobile 인지를 저장
    let window_w // browser 너비 저장
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //1024보다 크면 pc
            pc_mobile = 'pc'
        }else{ //1024 이하면 mobile
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    } //처음 로딩 됐을 때 실행
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })// browser가 리사이즈 될 때 마다 실행

    /* 메뉴(header .gnb .gnb_wrap ul.depth1>li)에 마우스 오버 시,
        header class="menu_over" 추가.
        마우스 오버된 li는 li class="on" 추가.

        -> 다른 메뉴(li)에 마우스 오버 시, 이전에 오버했던 메뉴의 클래스를 삭제 (li class="on" 삭제).
        -> header에서 마우스아웃 시, header class="menu_over" 삭제.
        -> 모든 메뉴에 li class="on"을 삭제했다가 오버한 나 자신li에게만 클래스를 추가.
            모든 메뉴에서 on 클래스 삭제. */
    
    $('header .gnb .gnb_wrap ul.depth1>li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ // pc ver. 일 때만 실행한다
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
            $(this).addClass('on') // 오버한 나 자신li. 
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){ // pc ver. 일 때만 실행한다
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1>li').removeClass('on')
        }
    })
    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile ver. 일 때만 실행하겠다
            $('header').addClass('mobile_open')
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile ver. 일 때만 실행하겠다
            $('header').removeClass('mobile_open')
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        }
    }) // header가 모바일이냐 피시냐에 따라 클래스를 주냐 마냐

    /* 모바일에서 메뉴 클릭 시,
        1. a의 링크값 삭제 (페이지가 이동되지 않게 해야함)
        2. li class="on" 추가 -> on의 유무에 따라 추가, 삭제함 -> 한 번 클릭시 열리고 두 번 클릭시 닫힘 */
    $('header .gnb ul.depth1>li>a').on('click', function(e){
        if(pc_mobile == 'mobile'){ //mobile ver. 일 때만 실행하겠다
        e.preventDefault(); /* a 태그의 href를 작동 시키지 않음 */
        $(this).parent().toggleClass('on')
        }
    }) // 모바일 메뉴 클릭 
    
    


}) //document.ready