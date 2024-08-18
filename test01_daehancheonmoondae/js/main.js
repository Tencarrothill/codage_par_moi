$('document').ready(function(){
    $('header .gnb .depth1>li').on('mouseenter focusin', function(){
        $('header .gnb .depth1>li').removeClass('over')
        $(this).addClass('over')
    })

    $('document').ready(function(){
        $('header .gnb').on('mouseleave', function(){
            $('header .gnb .depth1>li').removeClass('over')
        })
    })

    $('.news .tab>li').on('click', function(){
        $('.news .tab>li').removeClass('active')
        $(this).addClass('active')
    })

    $('.layer_oepn').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup button').on('click', function(){
        $('.layer_popup').hide()
    })


    /* visual_popup  
        idx 팝업의 번호
        1>2>3> 1>2>3 번호가 무한으로 돌아야 함.
    */
    let idx = 1 //idx = index

    setInterval(function(){
        if(idx < 3){
            idx++ //1더하기
        }else{
            idx = 1
        }
        console.log(idx)
        $('.popup ul li').removeClass('active')
        $('.popup ul li').eq(idx - 1).addClass('active')
        //eq -> nth child와 비슷한 녀석. 0번부터 세기 때문에 0번이 1, 1번이 2 이런식임.
    }, 3000)//3초

})//document