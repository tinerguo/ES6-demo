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
