var forLoop = function (array){
    array.length = 24
  for (let i = 0, l = array.length; i < l; i++){
    if (i === 1){
      array.push ("I am 1 strange loop.")
    }else{
      array.push (`"I am ${i} strange loops."`)
    }return array
  }
}

var whileLoop = function(n){
  while (n > 0){
    console.log(n--)
  }
    return 'done'
}
