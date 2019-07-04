#javascript基础

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
```
4. 变量作用域

要搞清楚一个变量的作用域，重点是搞清楚预解析顺序，然后再判断作用域的范围，这些都是有套路可言：
- 先找本层环境有无声明，有的话，看是否进行了赋值；
- 只有声明没有执行赋值，就是undefined。
- 没有向上查找：没有声明也没有赋值的话，就再向上一层查找，直到找到为止。
- 没有找到报错：如果所有的执行环境都没有找到，那么控制台就会报错变量找不到。

```javascript
    作用域.js
```


5. 闭包
闭包就是将函数内部和函数外部连接起来的一座桥梁,它的主要作用：
- 读取函数内部变量
- 让变量保持在内存中

使用实战一、
```javascript
//计数器
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

7. 原型链


99. call 和 apply 的解析和区别，bind的使用

100. 跨域


101. ajax 请求





1111.
