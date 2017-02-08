//兼容模式
var eventUtil = {
    //添加事件
    addHander:function(ele,type,fn){
        if(ele.addEventListener){
            ele.addEventListener(type,fn,false);
        }else {
            ele.attachEvent('on'+type,fn);
        }
    },
    //删除事件
    removeHander:function(ele,type,fn){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fn,false);
        }else {
            ele.detachEvent('on'+type,fn);
        }
    },
    //获取event
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取target
    getElement:function(event){
        return event.target || event.srcElement;
    },
    //阻止默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //阻止冒泡行为
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}