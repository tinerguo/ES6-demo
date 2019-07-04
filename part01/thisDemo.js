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




//end
