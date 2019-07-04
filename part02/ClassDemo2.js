function Person(){}

Person.prototype = {
    constructor:Person,
    name:'tiner',
    age:33,
    sayName:function(){
        console.log(this.name);
    }
}


var p = new Person();

p.sayName();
