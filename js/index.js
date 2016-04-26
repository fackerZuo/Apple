$(function(){
    //header处点击效果
    var $btn=$(".chosedaohang")
    var $nr=$(".nav-box")
    $nr.css({height:44});
    var $winH=document.documentElement.clientHeight;
    var flag=true;
    $btn.click(function(){
        if(flag){
            $nr.animate({height:$winH})
            flag=false;
        }else{
            $nr.animate({height:44})
            flag=true;
        }
    })

    /*底部变化*/
    var $h5=$("h5");
    var $span=$("h5 span");
    $h5.click(function(){
        var $footwinW=document.documentElement.clientWidth;
        if($footwinW>=768){
            return;
        }else{
            $(this).children("span").fadeToggle()
        }
    })
})