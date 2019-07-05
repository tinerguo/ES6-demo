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
    // console.log(i);
  }, 300);
}

//方法1：
for (var i = 0; i < 4; i++) {
    (function(i){
        setTimeout(function() {
          // console.log(i);
        }, 300);
    })(i);
}
//方法2：
for (var i = 0; i < 4; i++) {
        setTimeout((function(){
            var temp = i;
            return function(){
                // console.log(temp);
            }
        })(i), 300);
}



//获取多个元素并添加点击事件
var op = document.querySelectAll("p");
for(var j =0;j<op.length;j++){
    op[j].onClick = function(){
        console.log(j);
    }
}

//方法1
for(var j =0;j<op.length;j++){

    op[j].onClick = (function(){
        var temp= j;
        return function(){
            console.log(j);
        }
    })();
}

//方法2
for(var j =0;j<op.length;j++){

    op[j].onClick = (function(j){
        return function(j){
            console.log(j);
        }
    })(j);
}

//方法3
for(var j =0;j<op.length;j++){
    (function(j){
        op[j].onClick = function(){
            console.log(j);
        }
    })(j);
}
