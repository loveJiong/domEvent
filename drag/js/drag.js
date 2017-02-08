function getByClass(clsName,parent){//通过class获取元素兼容ie10以下
  var oParent = parent?document.getElementById(parent):document;
  var eles = [];
  var elements = oParent.getElementsByTagName('*');
  for(var i = 0 ; i<elements.length;i++){
    if(elements[i].className == clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

window.onload = drag;

function drag(){
  var oTitle = getByClass("login_logo_webqq","loginPanel")[0];
  //拖动
  oTitle.onmousedown = fnDown;
  //关闭
  var oClose = document.getElementById("ui_boxyClose");
  oClose.onclick = function(){
    document.getElementById("loginPanel").style.display = "none";
  }
  //状态切换
  var loginState = document.getElementById("loginState");
  var loginStatePanel = document.getElementById("loginStatePanel");
  var loginStateShow = document.getElementById("loginStateShow");
  var loginStateTxt = document.getElementById('login2qq_state_txt');
  var stateList = loginStatePanel.getElementsByTagName("li");

  //打开状态栏
  loginState.onclick = function(event){
    event = event || window.event;
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble = true;
    }
    loginStatePanel.style.display = "block";
  }

  for(var i =0;i<stateList.length;i++){
    //鼠标划过
    stateList[i].onmouseover = function(){
      this.style.background = "#567";
    }
    stateList[i].onmouseout = function(){
      this.style.background = "#FFF";
    }

    //点击状态栏
    stateList[i].onclick = function(event){
      event = event || window.event;
      var id = this.id;
      loginStateTxt.innerHTML = getByClass("stateSelect_text",id)[0].innerHTML;
      loginStateShow.className = "login-state-show " + id;

      if(event.stopPropagation){
        event.stopPropagation();
      }else{
        event.cancelBubble = true;
      }
      loginStatePanel.style.display = "none";
    }
  }
  //点击任意地区关闭面板
  document.onclick = function(){
    loginStatePanel.style.display = "none";
  }
}

function fnDown(event){//鼠标按下函数
  event = event || window.event;
  var oDrag = document.getElementById("loginPanel");
  //获取光标与面板之间的距离
  var disX = event.clientX - oDrag.offsetLeft;
  var disY = event.clientY - oDrag.offsetTop;

  //移动鼠标
  document.onmousemove = function(event){
    event = event || window.event;
    fnMove(event,disX,disY);
  };

  //释放鼠标
  document.onmouseup = function(){
    document.onmousemove = null;
    document.onmouseup = null;
  }
}

function fnMove(event,disX,disY){
  var oDrag = document.getElementById("loginPanel");
  var l = event.clientX - disX;
  var t = event.clientY - disY;
  var winW = document.documentElement.clientWidth || document.body.clientWidth;
  var winH = document.documentElement.clientHeight || document.body.clientHeight;
  var maxW = winW - oDrag.offsetWidth-10;
  var maxH = winH - oDrag.offsetHeight;

  l = l<0?l=0:(l>maxW?l=maxW:l);
  t = t<0?t=10:(t>maxH?t=maxH:t);

  oDrag.style.left = l + "px";
  oDrag.style.top = t + "px";
}