# javascript基础

1. JAVASCRIPT 对象类型
基础类型：number 、boolean、string、null、undefined
复杂：array、function、object

2. null和undefined区别
null： Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。
undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。

```javascript
    null和undefined.js
```

3. typeof 和 instanceof
- instanceof用于判断对象变量是否对象实例
- typeof判断对象类型

```javascript
    typeDemo.js



    //instanceof
    console.log("Object instanceof Object",Object instanceof Object);//true
    console.log("Function instanceof Function",Function instanceof Function);//true
    console.log("Number instanceof Number",Number instanceof Number);//false
    console.log("String instanceof String",String instanceof String);//false
    console.log("Function instanceof Object",Function instanceof Object);//true
    function Foo(){}
    console.log("Foo instanceof Object",Foo instanceof Object);//true
    console.log("Foo instanceof Function",Foo instanceof Function);//true
    console.log("Foo instanceof Foo",Foo instanceof Foo);//false

    //typeof
    console.log("typeof 2",typeof 2);//number
    console.log("typeof ''",typeof "");//string
    console.log("typeof new String('')",typeof new String(""));//object
    console.log("typeof null",typeof null);//object
    console.log("typeof undefined",typeof undefined);//undefined
    console.log("typeof false",typeof false);//boolean

    function Fun(){}
    var f = new Fun();
    console.log("typeof Fun",typeof Fun);//function
    console.log("typeof f",typeof f);//object
    console.log("typeof []",typeof []);//object

    //准确判断一个对象是否数组
     var arr1 = [1,2,3];
     var arr2 = new Array([1,2,3]);
     console.log(arr1.__proto__==Array.prototype);
     console.log(arr2.__proto__==Array.prototype);

    console.log( arr1 instanceof Array);     // true;
    console.log( arr2 instanceof Array);     // true;
    console.log(Array.isArray(arr1));
    console.log(Array.isArray(arr2));

    console.log(Object.prototype.toString.call(arr1));  //'[object Array]'


```
4. 变量作用域

要搞清楚一个变量的作用域，重点是搞清楚预解析顺序，然后再判断作用域的范围，这些都是有套路可言：
- 先找本层环境有无声明，有的话，看是否进行了赋值；
- 只有声明没有执行赋值，就是undefined。
- 没有向上查找：没有声明也没有赋值的话，就再向上一层查找，直到找到为止。
- 没有找到报错：如果所有的执行环境都没有找到，那么控制台就会报错变量找不到。

```javascript
    //作用域.js
    //如果在上层找不到变量，那么控制台报错
    var a = 10;
    function T1(){
        console.log(a);//10
    }
    T1();

    //查找上一层
    var a = 10;
    function T1(){
        console.log(a);//10
    }
    T1();

    //查找内部是否声明
    var a = 10;
    function T2(){
        console.log(a);//undefined
        if(true){
            var a = 20;
        }
        console.log(a);//20
    }

    T2();

    //测试未执行函数，只声明的情况
    var a = 10;
    function T3(){
        console.log(a);
        if(false){
            var a = 20;
        }
        console.log(a);
    }

    T3();

```


5. 闭包
闭包就是将函数内部和函数外部连接起来的一座桥梁,它的主要作用：
- 读取函数内部变量
- 让变量保持在内存中


```javascript
//使用实战1计数器
function addCount1(){
    var count = 0;

    return function(){
        count ++;
        console.log(count);
    }
}

function addCount2(){
    var count = 0;

    return function(){
        count ++;
        console.log(count);
    }
}
var c1 = addCount1();
c1();
c1();
c1();
var c2 = addCount2();
c2();
c2();
c2();

```

```javascript
//使用实例2定时器
//方法1：
for (var i = 0; i < 4; i++) {
    (function(i){
        setTimeout(function() {
          console.log(i);
        }, 300);
    })(i);
}
//方法2：
for (var i = 0; i < 4; i++) {
        setTimeout((function(){
            var temp = i;
            return function(){
                console.log(temp);
            }
        })(i), 300);
}
```

6. this 使用
```javascript
// 实例文件：thisDemo.js
//this在普通的方法中执行全局变量
var a = "top a !";
function test1(){
    console.log(this.a);
}
test1();

//对象中的this指向对象
var a = "top a !";
var test2 = {
    show:function(){
        console.log(this.a);
    }
};
test2.a = "test2 a !";
test2.show();



//fun对象中的this指向实例
var a = "top a !";
function test3(){
    console.log(this.a);
}

test3.prototype = {
    a:"test3 a !"
}

var t3 = new test3();
```

```javascript
//获取多个元素并添加点击事件
var op = document.querySelectAll("p");
for(var j =0;j<op.length;j++){
    op[j].onClick = function(){
        console.log(j);
    }
}

//方法1
for(var j =0;j<op.length;j++){

    op[j].onClick = (function(){
        var temp= j;
        return function(){
            console.log(j);
        }
    })();
}

//方法2
for(var j =0;j<op.length;j++){

    op[j].onClick = (function(j){
        return function(j){
            console.log(j);
        }
    })(j);
}

//方法3
for(var j =0;j<op.length;j++){
    (function(j){
        op[j].onClick = function(){
            console.log(j);
        }
    })(j);
}
```

7. 原型链


8. call 和 apply 的解析和区别，bind的使用

```javascript
var name = 'user';
var obj = {
    name:'tiner',
    show:function(){
        console.log(this.name);
    }
}



obj.show();
var showbak = obj.show;
showbak();
//call 和 apply
showbak.call(obj);
showbak.apply(obj);
//bind使用
var showbak2 = showbak.bind(obj);
showbak2();
```
bind还可以预设置参数
```javascript
function list(){
    console.log(Array.prototype.slice.call(arguments) );
}

var list1 = list(1,2,3);
var setParamsList = list.bind(undefined,37);//bind的第一个参数如果为undefined或者null的话，this指向全局
setParamsList();
setParamsList(1,2,3);

```

和setTimeout一起使用
```javascript
function Bloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

Bloomer.prototype = {
    bloom:function() {
      setTimeout(this.declare.bind(this), 4000);
    },
    declare:function(){
        console.log(this.petalCount);
    }
}

var b = new Bloomer();
b.bloom();
```


9. 跨域
解释：协议、端口、域名有任何一个不同就是跨域。是浏览器的一个保护机制（同源策略）.
- jsonp 是可以通过浏览器支持js访问不同源的文件的特性，使用回调函数进行请求服务器解决跨域问题。
- 使用iframe的时候可以使用window.postMessage 进行通讯
- CORS方案，方式：
    向另外一个域提交一个option请求，服务器返回相应，如果允许那么再次发送一个正常的请求
    header("Access-Control-Allow-Origin", "*");


10. ajax 请求



11. javascript有几种函数

```javascript

    //1.声明式函数
        function fun(){}
    //2.创建匿名函数表达式
        var fun = function(){}
    //3.创建具名函数表达式
    //注意show只能在函数内部使用，不能再外部使用
        var fun = function show(){}
    //4.Function构造函数
        new Function();
    //5.自执行函数
        (funtion(){})();
    //6.其他创建函数的方式
        eval、setTimeout、setInterval


```



102. dom 操作


1111.
