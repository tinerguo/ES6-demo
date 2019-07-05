
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
