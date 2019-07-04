#javascript基础

1. JAVASCRIPT 对象类型
基础类型：number 、boolean、string、null、undefined
复杂：array、function、object

2. null和undefined区别
null： Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。
undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。

```javascript
    nullAndundefined.js
```

3. typeof 和 instanceof



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

6. this 使用

7. 原型链


99. call 和 apply 的解析和区别，bind的使用

100. 跨域


101. ajax 请求





1111. 
