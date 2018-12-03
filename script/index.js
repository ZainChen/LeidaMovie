var personNumber = 0;  //准备随机分配的人数
var personName = new Array("",
  "曾文豪", "廖元武", "吴小伟", "熊敏", "罗剑", "付建平", "罗智强", "彭昌文", "王福东",
  "邓琼", "谢晔玲", "曾小斌", "段聪", "康宇晨", "孔佳承", "欧阳煜", "朱佳", "陈志银",
  "戴新亮", "周吉海", "欧著源", "朱婷", "杨成龙", "鄢艳玲", "郭莉华",
  "熊志勇", "朱模健",
  "张君", "徐海洋", "何银坤", "邹逸凡", "吴志锋", "樊泽亮", "凌杰", "欧阳皓明", "陈涛",
  "李川娇", "褚后屹", "--39", "--40--", "--41--", "--42--", "--43--", "--44--", "--45--",
  "--46--", "--47--", "--48--", "--49--", "--50--", "--51--", "--52--", "--53--", "--54--"
);
// var pn = new Array();

function Execute() {  //在文档加载完成后才能够去执行,可以避免获取不到对象的情况,同时可以避免定义全局变量和函数
  selectSeat();  //挑选座位和人员(只有选中了的座位才给排序)
  startButton();  //开始分配座位按钮
  shiftButton();  //背景与位置选择框切换功能
  moveLi();  //鼠标经过li效果
  allSelect();  //座位全选函数
}

function selectSeat() {  //挑选座位和人员(只有选中了的座位才给排序)
  for(var i = 1; i <= 54; i++) {
    var li = document.getElementById("li"+i);
    ~(function(i) {
      li.onclick = function() {
        var thisDiv = this.getElementsByTagName("div")[0];
        var shb = document.getElementById("shift-button");
        if(thisDiv.id == "li-person" && shb.innerText != "show") {  //当前位置没人时可单击添加一个人
          personNumber++;
          thisDiv.id = "li-person"+personNumber;
          this.style.background = "rgba(0,0,0,0.2)";
        } else if(thisDiv.id != "li-person-leida1" && thisDiv.id != "li-person-leida2" && thisDiv.id != "li-person-leida3" && shb.innerText != "show") {
          var k = 0, l = thisDiv.id.length;
          if(l == 10) {  //求当前减少的人所在div的id编号
            k = parseInt(thisDiv.id[l-1]);
          } else {
            k = parseInt(thisDiv.id[l-2])*10+parseInt(thisDiv.id[l-1]);
          }
          for(var j = k+1; j <= personNumber; j++) {  //减少一个人需要重新分配位置id
            document.getElementById("li-person"+j).id = "li-person"+(j-1);
          }
          var k1 = 0, l1 = this.id.length;
          if(l1 == 3) {  //求当前减少的人所在div的id编号
            k1 = parseInt(this.id[l1-1]);
          } else {
            k1 = parseInt(this.id[l1-2])*10+parseInt(this.id[l1-1]);
          }
          // seatAnimationDetail(k1, "out");  //div移出座位详细控制动画
          personNumber--;
          thisDiv.id = "li-person";
          this.style.background = "rgba(0,0,0,0)";
          document.getElementsByTagName("p")[k1-1].innerText = "";  //减少单击到的人是立马消失名字和图片
          document.getElementsByTagName("img")[k1-1].src = "./image/0.png";
        }
        document.getElementById("hide-yn").innerHTML = "Num:"+personNumber;  //显示已选位置数量
      }
    })(i);
  }
}

function allSelect() {  //座位全选函数
  var li = document.getElementsByTagName("li");
  var shb = document.getElementById("shift-button");
  var alc = document.getElementById("all-choice");
  alc.onclick = function() {
    if(shb.innerText != "show") {
      for(var i = 0; i < li.length; i++) {
        var thisDiv = li[i].getElementsByTagName("div")[0];
        if(thisDiv.id == "li-person") {  //当前位置没人时可单击添加一个人
          personNumber++;
          thisDiv.id = "li-person"+personNumber;
          li[i].style.background = "rgba(0,0,0,0.2)";
        }
      }
      document.getElementById("hide-yn").innerHTML = "Num:"+personNumber;  //显示已选位置数量
    }
  }
}

function startButton() {  //开始分配座位按钮
  var start = document.getElementById("start");
  var shb = document.getElementById("shift-button");
  start.onclick = function() {
    if(shb.innerText == "seat") {
      randomSeat();  //随机分配座位功能实现
      setTimeout(function() {seatAnimationIn(1);}, 2000);  //div移入座位控制总动画
    }
  }
}

function imgInitialize() {  //初始化图片(将所有图片变为0.png)
  var img = document.getElementsByTagName("img");
  for(var i = 0; i < img.length; i++) {
    if(i == 12) {
      img[i].src = "./image/leida1.jpg";
    } else if(i == 13) {
      img[i].src = "./image/leida2.jpg";
    } else {
      img[i].src = "./image/0.png";
    }
  }
}

function randomSeat() {  //随机分配座位功能实现
  imgInitialize();  //初始化图片(将所有图片变为0.png)
  document.getElementById("li-img-leida1").src = "./image/leida1.jpg";
  document.getElementById("li-name14").innerText = "雷老师";
  document.getElementById("li-img-leida2").src = "./image/leida2.jpg";
  document.getElementById("li-name15").innerText = "师母";
  document.getElementById("li-img-leida3").src = "./image/leida3.jpg";
  document.getElementById("li-name49").innerText = "曾前";
  var lple1 = document.getElementById("li-person-leida1");
  setTimeout(function() {lple1.style.left = "0px"; lple1.style.top = "0px";}, 500);
  var lple2 = document.getElementById("li-person-leida2");
  setTimeout(function() {lple2.style.left = "0px"; lple2.style.top = "0px";}, 1000);
  var lple3 = document.getElementById("li-person-leida3");
  setTimeout(function() {lple3.style.left = "0px"; lple3.style.top = "0px";}, 1500);
  var k, a = new Array(), t;
  for(var i = 0; i < personNumber; i++) {
    a[i] = i;
  }
  for(var i = 0; i < personNumber-1; i++) {
    k = Math.floor(Math.random()*(personNumber-i));  //0~(44-i)的随机数
    t = a[k];
    a[k] = a[personNumber-1-i];
    a[personNumber-1-i] = t;
  }
  for(var i = 0; i < personNumber; i++) { // console.log(a[i]);
    var lp = document.getElementById("li-person"+(i+1));
    lp.innerHTML = "<p id='li-name"+(i+1)+"'>"+personName[a[i]+1]+"</p><img class='li-img"+(i+1)+"' src='./image/"+(a[i]+1)+".jpg'>";
  }
}

function seatAnimationDetail(n, io) {  //div移入或移出座位详细控制动画,n为第几个div,io控制进入位置或出去动画
  if(n <= personNumber) {
    var lp = document.getElementById("li-person"+n);
    if(io == "in") {  //进入位置动画
      lp.style.left = "0px";
      lp.style.top = "0px";
    } else {
      if(n == 1) {
        lp.style.left = "-100px";
        lp.style.top = "0px";
      } else if(n == 2) {
        lp.style.left = "-206px";
        lp.style.top = "10px";
      }
    }
  }
}

function seatAnimationIn(n) {  //div移入座位控制总动画,n要为1
  var i = n;
  seatAnimationDetail(i, "in");
  setTimeout(function() {
    if(i < personNumber) {
      i++;
      seatAnimationIn(i);
    }
  }, 500);
}

function shiftButton() {  //背景与位置选择框切换功能
  var shb = document.getElementById("shift-button");
  var seb = document.getElementById("seat-border");
  var span = document.getElementsByTagName("span");
  var li = document.getElementsByTagName("li");
  shb.onclick = function() {
    if(shb.innerText == "show") {
      seb.style.backgroundPosition = "0px -500px";
      shb.innerText = "seat";
      // shb.style.bottom = "-45px";
      windowZain.setLeft("5px");
      windowZain.setTop("10px");
      for(var i = 0; i < span.length; i++) {
        span[i].style.display = "inline-block";
      }
      for(var i = 0; i < li.length; i++) {
        if(li[i].getElementsByTagName("div")[0].style.left == "0px") {
          li[i].getElementsByTagName("div")[0].style.display = "inline-block";
          // li[i].style.background = "rgba(0,0,0,0.1)";
        }
      }
    } else {
      seb.style.backgroundPosition = "0px 0px";
      shb.innerText = "show";
      // shb.style.bottom = "100px";
      windowZain.setLeft("590px");
      windowZain.setTop("450px");
      for(var i = 0; i < span.length; i++) {
        span[i].style.display = "none";
      }
      for(var i = 0; i < li.length; i++) {
        var lid = li[i].getElementsByTagName("div")[0];
        if(lid.style.left == "0px") {
          lid.style.display = "none";
          li[i].style.background = "rgba(0,0,0,0)";
        }
      }
    }
  }
}

function moveLi() {  //鼠标经过li效果
  var shb = document.getElementById("shift-button");
  var li = document.getElementsByTagName("li");
  var i;
  for(var i = 0; i < li.length; i++) {
    ~(function() {
      li[i].onmouseover = function() {
        if(shb.innerText == "seat" && this.id != "li14" && this.id != "li15" && this.id != "li49") {
          if(this.style.background == "rgba(0, 0, 0, 0)" || this.style.background == "") {
            this.style.background = "rgba(0,0,0,0.3)";
            this.style.cursor = "pointer";
          }
        }
      }
      li[i].onmouseout = function() {
        if(shb.innerText == "seat" && this.id != "li14" && this.id != "li15" && this.id != "li49") {
          // alert(this.style.background);
          if(this.style.background == "rgba(0, 0, 0, 0.298039)" || this.style.background == "rgba(0, 0, 0, 0.3)") {
            this.style.background = "rgba(0,0,0,0)";
          }
        }
      }
    })();
  }
}

window.onload = Execute //在文档加载完成后才能够去执行,可以避免获取不到对象的情况,同时可以避免定义全局变量和函数