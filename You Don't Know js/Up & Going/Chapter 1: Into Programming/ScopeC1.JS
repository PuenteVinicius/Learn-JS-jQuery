function one(){
  // this 'a' only belongs to the 'one() function'
  var a = 1;
  console.log(a);
}

function two(){
  //this 'a' only belongs to te 'two()' function
  var =2;
  console.log(a);
}

one(); // 1
two(); // 2
