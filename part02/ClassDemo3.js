function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}

var p = new Person('tiner',33);
p.sayName();
