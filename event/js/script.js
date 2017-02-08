window.onload = function(){
    function showMes(){
        alert('thb');
    }

    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var box = document.getElementById("box");
    var go = document.getElementById("go");

    //dom0级事件处理程序
    btn2.onclick = showMes;
    //btn2.onclick = null;

    //dom2级事件处理程序

    //非老版本ie下的处理程序
    //btn3.addEventListener('click',showMes,false);
    //btn3.removeEventListener('click',showMes,false);

    //老版本ie下的处理程序
    //btn3.attachEvent('onclick',showMes);
    //btn3.detachEvent('onclick',showMes);

    eventUtil.addHander(box,'click',function(){
        alert('this is box!');
    });

    eventUtil.addHander(btn3,'click',function(event){
        event = eventUtil.getEvent(event);
        eventUtil.stopPropagation(event);
        alert('this is btn3!');
    });

    eventUtil.addHander(go,'click',function(event){
        event = eventUtil.getEvent(event);
        eventUtil.stopPropagation(event);
        eventUtil.preventDefault(event);
        alert('this is go!');
    });


}