$('documnet').ready(function(){
    $('header .gnb .depth1>li').on('mouseenter focusin', function(){
        $('header .gnb .depth1>li').removeClass('over')
        $(this).addClass('over')
    })
    $('documnet').ready(function(){
        $('header .gnb').on('mouseleave', function(){
            $('header .gnb .depth1>li').removeClass('over')
        })
    })
})