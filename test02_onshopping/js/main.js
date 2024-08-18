$('document').ready(function(){
    $('header .gnb .depth1>li').on('mouseenter focusin', function(){
        $('header .gnb .depth1>li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb .depth1>li').removeClass('over')
    })

    /*
        visual_popup
        idx 팝업의 번호
        1>2>3>1>2>3 ... 무한으로 돌아야 한다.
    */
   let idx = 1 
   setInterval(function(){
        if(idx < 3){
            idx++ //더하기 1
        }else{
            idx = 1
        }
        console.log(idx)
        $('.popup ul li').removeClass('active')
        $('.popup ul li').eq(idx - 1).addClass('active')
        //eq -> nth child와 비슷한 선택자. 0번부터 세기 때문에 0->1, 1->2 이런 식이다.
   }, 3000)

   $('.news .tab>li').on('click', function(){
        $('.news .tab>li').removeClass('active')
        $(this).addClass('active')
   })

   $('.news .notice .layer_open').on('click', function(){
        $('.layer_popup .inner').show()
   })
   $('.layer_popup .inner button').on('click', function(){
        $('.layer_popup .inner').hide()
   })
})//documnet