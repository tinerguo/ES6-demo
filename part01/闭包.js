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
// var c1 = addCount1();
// c1();
// c1();
// c1();
// var c2 = addCount2();
// c2();
// c2();
// c2();



for (var i = 0; i < 4; i++) {
  setTimeout(function() {
    console.log(i);
  }, 300);
}

//方法1：
for (var i = 0; i < 4; i++) {
    (function(i){
        setTimeout(function() {
          console.log(i);
        }, 300);
    })(i);
}
//方法2：
for (var i = 0; i < 4; i++) {
        setTimeout((function(){
            var temp = i;
            return function(){
                console.log(temp);
            }
        })(i), 300);
}
