function ZainWindow(name) {  //Zain窗口构造函数
  //==========ZainWindow窗口对象的属性和默认值==========
  this.name = name;  //窗口名字
  this.width = 300;  //窗口宽度
  this.height = 300;  //窗口高度
  this.maxWidth = 1366;  //窗口最大宽度
  this.maxHeight = 768;  //窗口最大高度
  this.minWidth = 200;  //窗口与最小宽度
  this.minHeight = 30;  //窗口最小高度
  this.titleHeight = 30;  //顶部标题(控制窗口位置按钮)高度
  this.borderWidth = 6;  //窗口边框粗细(用来鼠标缩放窗口的)
  this.left = 200;  //窗口左边与父窗口左边的距离
  this.top = 100;  //窗口上边与父窗口上边的距离

  //==========ZainWindow窗口对象的所有方法实现==========
  //在showWindowInfo()方法不存在的情况下,才会将它添加到原型(其中，if 语句检查的可以是初始化之后应该存在的任何属性或方法——不必用一大堆if 语句检查每个属性和每个方法；只要检查其中一个即可)
  if(typeof this.showWindowInfo != "function") {
    //-----设置窗口宽度-----
    ZainWindow.prototype.setWidth = function(width) {  //设置窗口宽度
      this.width = parseInt(width);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;  //返回this就是返回了当前使用这个函数的对象,可以实现连续样式修改,例如:windowZain.setWidth("600px").setHeight("600px");
    }
    //-----设置窗口高度-----
    ZainWindow.prototype.setHeight = function(height) {  //设置窗口高度
      this.height = parseInt(height);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;
    }

    //-----设置窗口最大宽度-----
    ZainWindow.prototype.setMaxWidth = function(maxWidth) {  //设置窗口高度
      var er = "", max = minWidthShow;  //窗口信息设置错误报告
      if(parseInt(maxWidth) < minWidthShow) {
        er += this.name+"窗口的最大宽度不能小于最小宽度"+minWidthShow+"\n";
        max = minWidthShow > max ? minWidthShow : max;
      }
      if(parseInt(maxWidth) < this.width) {
        er += this.name+"窗口的最大宽度不能小于当前宽度"+this.width+"\n";
        max = this.width > max ? this.width : max;
      }
      if(er != "") {
        alert(er+this.name+"的最大宽度应该(>="+max+")\n");
        return this;
      }
      this.maxWidth = parseInt(maxWidth);
      maxWidthShow = this.maxWidth;
      return this;
    }
    //-----设置窗口最大高度-----
    ZainWindow.prototype.setMaxHeight = function(maxHeight) {  //设置窗口高度
      var er = "", max = minHeightShow;  //窗口信息设置错误报告
      if(parseInt(maxHeight) < minHeightShow) {
        er += this.name+"窗口的最大高度不能小于最小高度"+minHeightShow+"\n";
        max = minHeightShow > max ? minHeightShow : max;
      }
      if(parseInt(maxHeight) < this.height) {
        er += this.name+"窗口的最大高度不能小于当前高度"+this.height+"\n";
        max = this.height > max ? this.height : max;
      }
      if(er != "") {
        alert(er+this.name+"的最大高度应该(>="+max+")\n");
        return this;
      }
      this.maxHeight = parseInt(maxHeight);
      maxHeightShow = this.maxHeight;
      return this;
    }
    //-----设置窗口最小宽度-----
    ZainWindow.prototype.setMinWidth = function(minWidth) {  //设置窗口高度
      var er = "", min = maxWidthShow;  //窗口信息设置错误报告
      if(parseInt(minWidth) > maxWidthShow) {
        er += this.name+"窗口的最小宽度不能大于最大宽度"+maxWidthShow+"\n";
        min = maxWidthShow < min ? maxWidthShow : min;
      }
      if(parseInt(minWidth) > this.width) {
        er += this.name+"窗口的最小宽度不能大于当前宽度"+this.width+"\n";
        min = this.width < min ? this.width : min;
      }
      if(er != "") {
        alert(er+this.name+"的最小宽度应该(>0 && <="+min+")\n");
        return this;
      }
      this.minWidth = parseInt(minWidth);
      minWidthShow = this.minWidth;
      return this;
    }
    //-----设置窗口最小高度-----
    ZainWindow.prototype.setMinHeight = function(minHeight) {  //设置窗口高度
      var er = "", min = maxHeightShow;  //窗口信息设置错误报告
      if(parseInt(minHeight) > maxHeightShow) {
        er += this.name+"窗口的最小高度不能大于最大高度"+maxHeightShow+"\n";
        min = maxHeightShow < min ? maxHeightShow : min;
      }
      if(parseInt(minHeight) > this.height) {
        er += this.name+"窗口的最小高度不能大于当前高度"+this.height+"\n";
        min = this.height < min ? this.height : min;
      }
      if(er != "") {
        alert(er+this.name+"的最小高度应该(>0 && <="+min+")\n");
        return this;
      }
      this.minHeight = parseInt(minHeight);
      minHeightShow = this.minHeight;
      return this;
    }

    //-----设置窗口顶部标题(控制窗口位置按钮)高度-----
    ZainWindow.prototype.setBorderWidth = function(borderWidth) {  //设置窗口顶部标题(控制窗口位置按钮)高度
      this.borderWidth = parseInt(borderWidth);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;
    }
    //-----设置窗口边框粗细(用来鼠标缩放窗口的)-----
    ZainWindow.prototype.setTitleHeight = function(titleHeight) {  //设置窗口顶部标题(控制窗口位置按钮)高度
      this.titleHeight = parseInt(titleHeight);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;
    }
    //-----设置窗口左边与父窗口左边的距离-----
    ZainWindow.prototype.setLeft = function(left) {  //设置窗口左边与父窗口左边的距离
      this.left = parseInt(left);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;
    }
    //-----设置窗口上边与父窗口上边的距离-----
    ZainWindow.prototype.setTop = function(top) {  //设置窗口上边与父窗口上边的距离
      this.top = parseInt(top);
      InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //实时更新窗口的初始化数据
      return this;
    }
    //-----显示窗口信息-----
    ZainWindow.prototype.showWindowInfo = function() {  //显示窗口信息
      var windowInfo = this.name+":\n"+
                      "\twidth:"+this.width+"\n"+
                      "\theight:"+this.height+"\n"+
                      "\tmaxWidth:"+this.maxWidth+"\n"+
                      "\tmaxHeight:"+this.maxHeight+"\n"+
                      "\tminWidth:"+this.minWidth+"\n"+
                      "\tminHeight:"+this.minHeight+"\n"+
                      "\ttitleHeight:"+this.titleHeight+"\n"+
                      "\tborderWidth:"+this.borderWidth+"\n"+
                      "\tleft:"+this.left+"\n"+
                      "\ttop:"+this.top;
      console.log(windowInfo);
      return this;
    }
  }

  //==============ZainWindow窗口的相关功能实现方法==================
  //--==--!!搜索指定对象非常重要,可以利用其它自定义属性或原生属性代替窗口元素(标签)--==--
  //-----在element元素中寻找zain-window-name属性值为name的对象,返回值为找到的对象-----
  //参数分别为元素(标签)名、标签内属性、属性值
  function seekObject(element, property, propertyName) {  //寻找指定元素和指定属性和属性名的对象
    var o = document.getElementsByTagName(element);
    for(var i = 0; i < o.length; i++) {
      //注意如果是窗口的非整体部分需要通过其父元素来判断是否是当前需要找的窗口里的部分(这种方法简化了html里的代码)
      if((element == "zain-window" && o[i].getAttribute(property) == propertyName) || (element != "zain-window" && o[i].parentNode.getAttribute(property) == propertyName)) {  //判断属性为zain-window-name的zain-window标签的改属性值是否等于当前窗口名
        return o[i];
      }
    }

    //同时兼容用div和id来创建窗口
    //对div元素(标签)生成的zainWindow窗口的检索,element将被id属性值替代
    var od = document.getElementsByTagName("div");
    for(var i = 0; i < od.length; i++) {
      if(od[i].id == element && ((element == "zain-window" && od[i].getAttribute(property) == propertyName) || (element != "zain-window" && od[i].parentNode.getAttribute(property) == propertyName))) {
        return od[i];
      }
    }
  }
  // console.log(seekObject("zain-window", "zain-window-name", name));

  //-----创建并实例化新窗口的所有元素(标签)-----
  createWindowElement(this.name);  //创建并实例化新窗口的所有元素(标签)
  function createWindowElement(name) {  //创建并实例化新窗口的所有元素(标签)(参数为当前窗口名字)
    document.createElement("zain-window");  //实例化自定义标签(告诉浏览器我要创建一个名为zain-window的新标签)(防止低版本浏览器不兼容)
    document.createElement("zain-window-title");
    document.createElement("zain-window-content");
    document.createElement("zain-window-left-top");
    document.createElement("zain-window-top");
    // zainWindowLeftTop.setAttribute('zain-window-name', 'ZainChen');  //创建自定义属性zain-window-name属性值为ZainChen
    var zw = seekObject("zain-window", "zain-window-name", name);  //寻找指定元素和指定属性和属性名的对象
    zw.innerHTML += "<zain-window-left-top></zain-window-left-top>"
                  + "<zain-window-top></zain-window-top>"
                  + "<zain-window-right-top></zain-window-right-top>"
                  + "<zain-window-left></zain-window-left>"
                  + "<zain-window-right></zain-window-right>"
                  + "<zain-window-left-bottom></zain-window-left-bottom>"
                  + "<zain-window-bottom></zain-window-bottom>"
                  + "<zain-window-right-bottom></zain-window-right-bottom>";
  }

  //-----初始化窗口所有部分实际宽高-----
  //参数分别对应窗口名,整个窗口的初始宽,高,顶部标题(控制窗口位置按钮)高度,窗口边框粗细,整个窗口初始位置(left为距左边,top为距顶部距离)
  InitializeWindow(this.name, this.width, this.height, this.titleHeight, this.borderWidth, this.left, this.top);  //初始化窗口所有部分实际宽高
  function InitializeWindow(name, width, height, titleHeight, borderWidth, left, top) {
    var zw = seekObject("zain-window", "zain-window-name", name);  //寻找指定元素和指定属性和属性名的对象
    zw.style.width = width+"px";
    zw.style.height = height+"px";
    zw.style.left = left+"px";
    zw.style.top = top+"px";
    var zwti = seekObject("zain-window-title", "zain-window-name", name);
    zwti.style.width = zw.style.width;
    zwti.style.height = titleHeight+"px";
    zwti.style.left = "0px";
    zwti.style.top = "0px";
    var zwcon = seekObject("zain-window-content", "zain-window-name", name);
    zwcon.style.width = zw.style.width;
    zwcon.style.height = height-titleHeight+"px";
    zwcon.style.left = "0px";
    zwcon.style.top = titleHeight+"px";
    var zwlt = seekObject("zain-window-left-top", "zain-window-name", name);
    zwlt.style.width = borderWidth+"px";
    zwlt.style.height = borderWidth+"px";
    zwlt.style.left = "0px";
    zwlt.style.top = "0px";
    var zwt = seekObject("zain-window-top", "zain-window-name", name);
    zwt.style.width = width-2*borderWidth+"px";
    zwt.style.height = borderWidth+"px";
    zwt.style.left = borderWidth+"px";
    zwt.style.top = "0px";
    var zwrt = seekObject("zain-window-right-top", "zain-window-name", name);
    zwrt.style.width = borderWidth+"px";
    zwrt.style.height = borderWidth+"px";
    zwrt.style.left = width-borderWidth+"px";
    zwrt.style.top = "0px";
    var zwl = seekObject("zain-window-left", "zain-window-name", name);
    zwl.style.width = borderWidth+"px";
    zwl.style.height = height-2*borderWidth+"px";
    zwl.style.left = "0px";
    zwl.style.top = borderWidth+"px";
    var zwr = seekObject("zain-window-right", "zain-window-name", name);
    zwr.style.width = borderWidth+"px";
    zwr.style.height = height-2*borderWidth+"px";
    zwr.style.left = width-borderWidth+"px";
    zwr.style.top = borderWidth+"px";
    var zwlb = seekObject("zain-window-left-bottom", "zain-window-name", name);
    zwlb.style.width = borderWidth+"px";
    zwlb.style.height = borderWidth+"px";
    zwlb.style.left = "0px";
    zwlb.style.top = height-borderWidth+"px";
    var zwb = seekObject("zain-window-bottom", "zain-window-name", name);
    zwb.style.width = width-2*borderWidth+"px";
    zwb.style.height = borderWidth+"px";
    zwb.style.left = borderWidth+"px";
    zwb.style.top = height-borderWidth+"px";
    var zwrb = seekObject("zain-window-right-bottom", "zain-window-name", name);
    zwrb.style.width = borderWidth+"px";
    zwrb.style.height = borderWidth+"px";
    zwrb.style.left = width-borderWidth+"px";
    zwrb.style.top = height-borderWidth+"px";
  }

  //-----窗口所有相关部分对象--------
  var zw = seekObject("zain-window", "zain-window-name", name);  //寻找指定元素和指定属性和属性名的对象
  var zwti = seekObject("zain-window-title", "zain-window-name", name);
  var zwcon = seekObject("zain-window-content", "zain-window-name", name);
  var zwlt = seekObject("zain-window-left-top", "zain-window-name", name);
  var zwt = seekObject("zain-window-top", "zain-window-name", name);
  var zwrt = seekObject("zain-window-right-top", "zain-window-name", name);
  var zwl = seekObject("zain-window-left", "zain-window-name", name);
  var zwr = seekObject("zain-window-right", "zain-window-name", name);
  var zwlb = seekObject("zain-window-left-bottom", "zain-window-name", name);
  var zwb = seekObject("zain-window-bottom", "zain-window-name", name);
  var zwrb = seekObject("zain-window-right-bottom", "zain-window-name", name);

  //------实时根据最外层zain-window调整所有window宽高和位置函数-----
  function adjustWindow() {
    zwti.style.width = zw.style.width;
    zwcon.style.width = zw.style.width;
    zwcon.style.height = parseInt(zw.style.height)-parseInt(zwti.style.height)+"px";
    zwt.style.width = parseInt(zw.style.width)-2*parseInt(zwlt.style.width)+"px";
    zwrt.style.left = parseInt(zw.style.width)-parseInt(zwlt.style.width)+"px";
    zwl.style.height = parseInt(zw.style.height)-2*parseInt(zwlt.style.width)+"px";
    zwr.style.height = parseInt(zw.style.height)-2*parseInt(zwlt.style.width)+"px";
    zwr.style.left = parseInt(zw.style.width)-parseInt(zwlt.style.width)+"px";
    zwlb.style.top = parseInt(zw.style.height)-parseInt(zwlt.style.height)+"px";
    zwb.style.width = parseInt(zw.style.width)-2*parseInt(zwlt.style.width)+"px";
    zwb.style.top = parseInt(zw.style.height)-parseInt(zwlt.style.height)+"px";
    zwrb.style.left = parseInt(zw.style.width)-parseInt(zwlt.style.width)+"px";
    zwrb.style.top = parseInt(zw.style.height)-parseInt(zwlt.style.height)+"px";
  }

  //---------------鼠标拖动控制窗口放大缩小和移动等功能实现------------

  //-----窗口最大最小宽高储存变量-------
  var maxWidthShow = this.maxWidth;  //窗口最大宽度
  var maxHeightShow = this.maxHeight;  //窗口最大高度
  var minWidthShow = this.minWidth;  //窗口与最小宽度
  var minHeightShow = this.minHeight;  //窗口最小高度

  mouseControlWindow(this.name);
  function mouseControlWindow(name) {
    var winThis = "";  //记录当前点中待拖动的窗口
    var msdX = null;  //鼠标按下时的x坐标
    var msdY = null;  //鼠标按下时的y坐标
    var msdWLeft = null;  //鼠标按下时当前窗口左边与父窗口左边的距离
    var msdWTop = null;  //鼠标按下时当前窗口上边与父窗口上边的距离
    var msdWidth = null;  //鼠标按下时当前窗口宽度
    var msdHeight = null;  //鼠标按下时当前窗口高度

    //---------------------鼠标按下事件---------------------
    zwti.addEventListener("mousedown", zainWindowMouseDown);  //上方移动窗口按钮
    zwcon.addEventListener("mousedown", zainWindowMouseDown);  //窗口中间内容部分
    zwlt.addEventListener("mousedown", zainWindowMouseDown);  //左上角按钮拖拽扩大缩小
    zwt.addEventListener("mousedown", zainWindowMouseDown);  //上方按钮
    zwrt.addEventListener("mousedown", zainWindowMouseDown);  //右上角按钮
    zwl.addEventListener("mousedown", zainWindowMouseDown);  //左方按钮
    zwr.addEventListener("mousedown", zainWindowMouseDown);  //右方按钮
    zwlb.addEventListener("mousedown", zainWindowMouseDown);  //左下角按钮
    zwb.addEventListener("mousedown", zainWindowMouseDown);  //下方按钮
    zwrb.addEventListener("mousedown", zainWindowMouseDown);  //右下角按钮
    function zainWindowMouseDown(e) {
      //控制窗口层级变化需要组织事件冒泡
      //阻止冒泡事件(如果不阻止冒泡事件,窗口嵌套的层级变化会出问题,原理是叠在一起的玻璃,敲碎最上面层的玻璃不会波及到其下层的玻璃)
      if(e && e.stopPropagation){  //非IE
        e.stopPropagation();
      } else{  //IE
        window.event.cancelBubble=true;
      }
      zIndexWindow("zain-window", "zain-window-name", name);  //多个窗口层级控制函数(使鼠标单击到的窗口显示在z-index:100的层级中,防止被其他窗口覆盖)
      winThis = this;  //console.log(this);
      //document.all是页面内所有元素的一个集合。例如：document.all(0)表示页面内第一个元素;document.all可以判断浏览器是否是IE
      //这是firefox对于鼠标事件的捕捉,ie使用的是setCapture()函数,非常适合用于拖拽功能中捕捉鼠标事件
      document.all ? windowThis.releaseCapture() : window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
      msdX = e.clientX-parseInt(zw.style.left);  //鼠标单击点与当前窗口最左边的距离
      msdY = e.clientY-parseInt(zw.style.top);  //鼠标单击点与当前窗口最上边的距离
      msdWLeft = parseInt(zw.style.left);  //鼠标单击时当前窗口与父窗口最左边的距离
      msdWTop = parseInt(zw.style.top);  //鼠标单击时当前窗口与父窗口最上边的距离
      msdWidth = parseInt(zw.style.width);  //鼠标单击到的当前窗口的宽度
      msdHeight = parseInt(zw.style.height);  //鼠标单击到的当前窗口的高度
      //---改变鼠标样式---
      var html = document.getElementsByTagName("html")[0];
      if(winThis == zwti) {
        html.style.cursor = "crosshair";
      } else if(winThis == zwlt) {
        html.style.cursor = "nw-resize";
      } else if(winThis == zwt) {
        html.style.cursor = "n-resize";
      } else if(winThis == zwrt) {
        html.style.cursor = "ne-resize";
      } else if(winThis == zwl) {
        html.style.cursor = "w-resize";
      } else if(winThis == zwr) {
        html.style.cursor = "e-resize";
      } else if(winThis == zwlb) {
        html.style.cursor = "sw-resize";
      } else if(winThis == zwb) {
        html.style.cursor = "s-resize";
      } else if(winThis == zwrb) {
        html.style.cursor = "se-resize";
      }
    }

    //--------------------鼠标移动事件--------------------
    document.addEventListener("mousemove", zainWindowMouseMove);
    function zainWindowMouseMove(e) {
      if(winThis != "") {  //在鼠标没选中任何窗口时提高效率
        //----鼠标拖动改变窗口宽度与左边距----
        // console.log(maxWidthShow+", "+maxHeightShow+", "+minWidthShow+", "+minHeightShow);
        if(winThis == zwlt || winThis == zwl || winThis == zwlb) {  //左方按钮改变最外层window-all的宽
          if(msdWidth+msdWLeft-(e.clientX-msdX) >= minWidthShow && msdWidth+msdWLeft-(e.clientX-msdX) <= maxWidthShow) {  //控制窗口的最大最小宽度
            zw.style.width = msdWidth+msdWLeft-(e.clientX-msdX)+"px";
          } else if(msdWidth+msdWLeft-(e.clientX-msdX) < minWidthShow) {  //以下两个判断可防止鼠标移动坐标改变太快超出窗口最大最小临界值而无法改变窗口大小
            zw.style.width = minWidthShow+"px";
            zw.style.left = msdWidth+msdWLeft-minWidthShow+"px";
          } else if(msdWidth+msdWLeft-(e.clientX-msdX) > maxWidthShow) {
            zw.style.width = maxWidthShow+"px";
            zw.style.left = msdWidth+msdWLeft-maxWidthShow+"px";
          }
        } else if(winThis == zwrt || winThis == zwr || winThis == zwrb) {  //右方按钮改变最外层zain-window的宽
          if(msdWidth-msdWLeft+(e.clientX-msdX) >= minWidthShow && msdWidth-msdWLeft+(e.clientX-msdX) <= maxWidthShow) {
            zw.style.width = msdWidth-msdWLeft+(e.clientX-msdX)+"px";
          } else if(msdWidth-msdWLeft+(e.clientX-msdX) < minWidthShow) {  //以下两个判断可防止鼠标移动坐标改变太快超出窗口最大最小临界值而无法改变窗口大小
            zw.style.width = minWidthShow+"px";
          } else if(msdWidth-msdWLeft+(e.clientX-msdX) > maxWidthShow) {
            zw.style.width = maxWidthShow+"px";
          }
        }
        if(((winThis == zwlt || winThis == zwl || winThis == zwlb) && msdWidth+msdWLeft-(e.clientX-msdX) >= minWidthShow && msdWidth+msdWLeft-(e.clientX-msdX) <= maxWidthShow) || winThis == zwti) zw.style.left = (e.clientX-msdX)+"px";  //左方按钮改变最外层window-all的左边距
        //----鼠标拖动改变窗口高度与上边距----
        if(winThis == zwlt || winThis == zwt || winThis == zwrt) {  //上方按钮改变最外层window-all的高
          if(msdHeight+msdWTop-(e.clientY-msdY) >= minHeightShow && msdHeight+msdWTop-(e.clientY-msdY) <= maxHeightShow) {  //  //控制窗口的最大最小高度
            zw.style.height = msdHeight+msdWTop-(e.clientY-msdY)+"px";
          } else if(msdHeight+msdWTop-(e.clientY-msdY) < minHeightShow) {  //以下两个判断可防止鼠标移动坐标改变太快超出窗口最大最小临界值而无法改变窗口大小
            zw.style.height = minHeightShow+"px";
            zw.style.top = msdHeight+msdWTop-minHeightShow+"px";
          } else if(msdHeight+msdWTop-(e.clientY-msdY) > maxHeightShow) {
            zw.style.height = maxHeightShow+"px";
            zw.style.top = msdHeight+msdWTop-maxHeightShow+"px";
          }
        } else if(winThis == zwlb || winThis == zwb || winThis == zwrb) {  //下方按钮改变最外层window-all的高
          if(msdHeight-msdWTop+(e.clientY-msdY) >= minHeightShow && msdHeight-msdWTop+(e.clientY-msdY) <= maxHeightShow) {
            zw.style.height = msdHeight-msdWTop+(e.clientY-msdY)+"px";
          } else if(msdHeight-msdWTop+(e.clientY-msdY) < minHeightShow){  //以下两个判断可防止鼠标移动坐标改变太快超出窗口最大最小临界值而无法改变窗口大小
            zw.style.height = minHeightShow+"px";
          } else if(msdHeight-msdWTop+(e.clientY-msdY) > maxHeightShow) {
            zw.style.height = maxHeightShow+"px";
          }
        }
        if(((winThis == zwlt || winThis == zwt || winThis == zwrt) && msdHeight+msdWTop-(e.clientY-msdY) >= minHeightShow && msdHeight+msdWTop-(e.clientY-msdY) <= maxHeightShow) || winThis == zwti) zw.style.top = (e.clientY-msdY)+"px"; //上方按钮改变最外层window-all的上边距
        adjustWindow();  //实时根据最外层zain-window调整所有window宽高和位置函数
      }
    }

    //--------------------鼠标松开事件--------------------
    document.addEventListener("mouseup", zainWindowMouseUp);
    function zainWindowMouseUp() {  //鼠标松开事件
      document.getElementsByTagName("html")[0].style.cursor = "default";
      if(winThis) {
        document.all ? windowThis.releaseCapture() : window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
        winThis = "";
        noOutParentWindow();  //使子窗口不会移出父窗口的范围
      }
    }

    //---类似前面的seekObject寻找指定对象方法---
    //-----多个窗口层级控制函数(使鼠标单击到的窗口显示在z-index:100的层级中,防止被其他窗口覆盖)========================
    function parentZIndex(p) {  //使当前窗口的所有外层窗口整体层级都变为100
      if(p != null) {
        p = p.parentNode;
      }
      while(p != document.getElementsByTagName("body")[0] && p != null) {
        if(p != zwcon) {
          p.style.zIndex = "100";
        }
        if(p != null) {
          p = p.parentNode;
        }
      }
    }
    function zIndexWindow(element, property, propertyName) {
      var o = document.getElementsByTagName(element);
      for(var i = 0; i < o.length; i++) {
        if(o[i].getAttribute(property) == propertyName) {  //判断属性为zain-window-name的zain-window标签的改属性值是否等于当前窗口名
          o[i].style.zIndex = "100";
          parentZIndex(o[i]);  //使当前窗口的所有外层窗口层级都变为100
        } else {
          o[i].style.zIndex = "1";
        }
      }

      //同时兼容用div和id来创建窗口
      //对div元素(标签)生成的zainWindow窗口的检索,element将被id属性值替代
      var od = document.getElementsByTagName("div");
      for(var i = 0; i < od.length; i++) {
        if(od[i].id == element && od[i].getAttribute(property) == propertyName) {
          od[i].style.zIndex = "100";
          parentZIndex(o[i]);  //使当前窗口的所有外层窗口层级都变为100
        } else {
          od[i].style.zIndex = "1";
        }
      }
    }

    //-----使子窗口不会移出父窗口的范围-----
    function noOutParentWindow() {  //使子窗口不会移出父窗口的范围
      if(parseInt(zw.style.top) <= 0) zw.style.top = "0px";  //使窗口不能从父窗口顶部移出父窗口范围
      // console.log(zw.parentNode.nextElementSibling);  //当前节点的父节点的下一个兄弟节点元素对象
      var fnw = zw.parentNode.nextElementSibling;  //当前节点的父节点的下一个兄弟节点元素对象(父窗口的左上角zwlt对象)
      if(fnw != null) { fnw = parseInt(fnw.style.width); }  //父窗口的左上角zwlt对象的宽度
      if(parseInt(zw.style.left) <= -parseInt(zw.style.width)+2*parseInt(zwlt.style.width)+2*fnw) zw.style.left = -parseInt(zw.style.width)+2*parseInt(zwlt.style.width)+2*fnw+"px";  //使窗口不能从父窗口左部移出父窗口范围
      var fw = 0, fh = 0;
      if(zw.parentNode == document.getElementsByTagName("body")[0]) {
        // console.log(document.body.clientWidth+", "+document.body.clientHeight);
        fw = parseInt(document.body.clientWidth);
        fh = parseInt(document.body.clientHeight);
      } else {
        fw = parseInt(zw.parentNode.style.width);
        fh = parseInt(zw.parentNode.style.height);
      }
      if(parseInt(zw.style.top) >= fh-2*parseInt(zwlt.style.width)-2*fnw) zw.style.top = fh-2*parseInt(zwlt.style.width)-2*fnw+"px";
      if(parseInt(zw.style.left) >= fw-2*parseInt(zwlt.style.width)-2*fnw) zw.style.left = fw-2*parseInt(zwlt.style.width)-2*fnw+"px";
    }

    //
  }
}

// function zainExecute() {
// }
// window.onload = zainExecute //在文档加载完成后才能够去执行,可以避免获取不到对象的情况,同时可以避免定义全局变量和函数