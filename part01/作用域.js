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
