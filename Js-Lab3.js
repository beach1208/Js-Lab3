// //Q1 a
var arr = ['dog','cat','deer'];
var result = arr[0] + arr[2];

// result = dogdeer

// // b

var girls = ["Cecille","Lone"];
var boys = ["Emil","Tobias","Linus"];
var children = girls.concat(boys);

console.log(children);

// // c
var arr = [20,30];
for (var i = arr.length; i < 5; i += 1) {
  arr[i] = Math.pow(i,2);
}

console.log(arr);

// // answer = [20,30,4,9,16]
//
// // d
var arr = [10,20,30,40,50,60,70,90];
var sum = 0;

for (var i = 0; i < 8; i += 1) {
  sum = sum + arr[i];
}

console.log(sum);

//e
var DL = 5;
var d = [25.0,9.0,10.0,25.0,15.0];
var mi = 0;
var m = d[mi];
for(var i = 1; i < DL; i++) {
  if(d[i] < m) {
    mi = i;
    m = d[mi];
    console.log(m);
  }
}
console.log("mi = ",mi,"m = ",m);
// answer output = 25 25 25

// Q2
function sumArray (arr,size) {
  var result;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if(size = 6) {
        arr[i] = arr[5];
        arr[j] = arr[5];
        result = arr[5][5];
      }
  }
  }
  return result;
}
console.log(sumArray([[1,2,3,4,5,15],[2,3,4,5,6,20],[3,4,5,6,7,25],[4,5,6,7,8,30],[5,6,7,8,9,35],[15,20,25,30,35,125]]));
