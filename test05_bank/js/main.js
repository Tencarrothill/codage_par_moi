$('document').ready(function(){
    $('header .gnb ul.depth1').on('mouseenter focusin', function(){
        $('header .gnb ul.depth1').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb ul.depth1').on('mouseleave', function(){
        $('header .gnb ul.depth1').removeClass('over')
    })

    let idx = 1
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        console.log(idx)
        $('.popup ul li').removeClass('active')
        $('.popup ul li').eq(idx - 1).addClass('active')
    }, 3000)

    $('.container .news .tab li').on('click', function(){
        $('.container .news .tab li').removeClass('active')
        $(this).addClass('active')
    })

    $('.container .news .notice ul li.layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup button').on('click', function(){
        $('.layer_popup').hide()
    })
})//document