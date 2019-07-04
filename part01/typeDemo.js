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
