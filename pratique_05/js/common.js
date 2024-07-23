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



}) //document.ready