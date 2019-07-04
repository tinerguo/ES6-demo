//工厂方法实现
function createPerson(name,age){
    var obj = new Object();

    obj.name = name;
    obj.age = age;

    obj.sayName = function(){
        console.log(this.name);
    }
    return obj;
}


var p = new createPerson("tiner",33);
p.sayName();
