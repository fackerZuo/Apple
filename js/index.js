$(function(){
    //header处点击效果
    var $btn=$(".min-nav:first-child")
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
    //轮播
    imgW=$(".banner .images").width();
    $(".banner .images").eq(0).css({left:0})
    var $wheelbj=$(".banner")
    var $rightJt=$(".rightjt");
    var $leftJt=$(".leftjt");
    var now=0;
    var next=0;
    var flag=true;
    var t=setInterval(move,2000)
    var $imgs=$(".banner .images")//所有图片的集合
    var $btn=$(".btn div")//所有按钮的集合
    function move(){
        if(!flag){
            return
        }
        flag=false;
        next++;
        if(next>=$imgs.length){
            next=0;
        }
        $imgs.eq(now).animate({left:-imgW},500,function(){//当前显示的页面向左移动一个图片的距离
            flag=true;
        });
        $imgs.eq(next).css({left:imgW}).animate({left:0},500)
        //下一个要显示的先放到最右边，然后慢慢移动到可以显示的
        $btn.removeClass().eq(next).addClass("hot")//下面的按钮样式变
        now=next;
    }
    $wheelbj.hover(function(){//当鼠标放上去的时候，停止，移出去的时候继续
        clearInterval(t)
    },function(){
        t=setInterval(move,2000)
    })
    $btn.click(function(){//小圆点点击的时候 图片变化
        var index=$(this).index()
        if(!flag||now==index){
            return
        }
        flag=false;
        if(index>now){//从右往左进
            $imgs.eq(now).animate({left:-imgW},500);
            $imgs.eq(index).css({left:imgW}).animate({left:0},500,function(){
                flag=true;
            })
        }
        if(index<now){//从左往右进
            $imgs.eq(now).animate({left:imgW},500);
            $imgs.eq(index).css({left:-imgW}).animate({left:0},500,function(){
                flag=true;
            })
        }
        $btn.removeClass().eq(index).addClass("hot");
        now=next=index;
    })
    $rightJt.click(function(){
        move()
    })
    $leftJt.click(function(){
        if(!flag){
            return
        }
        flag=false
        $imgs.stop(false,true)
        next--;    //一定要想要顺序，在next这里出现过错误，顺序问题导致出现一个空脚标
        if(next==-1){
            next=$imgs.length-1;
        }
        $imgs.eq(now).animate({left:imgW},500,function(){
            flag=true;
        });
        $imgs.eq(next).css({left:-imgW}).animate({left:0},500)
        $btn.removeClass().eq(next).addClass("hot")
        now=next;
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