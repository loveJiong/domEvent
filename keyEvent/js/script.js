var data = ['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'];
var timer = null;
var flag = true;

window.onload = function(){
    var play = document.getElementById("play");
    var stop = document.getElementById("stop");

    //开始抽奖
    play.onclick = playFun;

    //停止抽奖
    stop.onclick = function(){
        stopFun.call(play);
    };

    //键盘事件
    document.onkeyup = function(event){
        event = event || window.event;
        if(event.keyCode ==13){
            if(flag){
                playFun.call(play);
            }else{
                stopFun.call(play);
            }
        }
    }
}

function playFun(){
    var title = document.getElementById("title");
    flag = !flag;
    clearInterval(timer);//加定时器前先清除定时器，否则点的次数越多，定时器越多
    timer = setInterval(function() {
            var random = Math.floor(Math.random()*data.length);
            title.innerHTML = data[random];
        }, 100);
    this.style.background = "#999";
}

function stopFun(){
    flag = !flag;
    this.style.background = "#036";
    clearInterval(timer);
}
