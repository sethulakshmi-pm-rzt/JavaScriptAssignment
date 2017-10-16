//Closure is the combination of function and lexical environment within which that function was declared

//1st pgm
//function closurePgm(){
//  let name = "sethulakshmi"
//  function getName(){
//    console.log("GetName : ", name)
//  }
//  getName();
//  console.log("Name :", name)
//}
//closurePgm();


//2nd pgm
function add(x){
  console.log("x", x)
  return function(y){
    console.log("x", x, ", y", y)
    return x + y;
  }
}

console.log("Add : ", add(5)(6))
