function ganjil (num) {
  if (num % 2 === 1){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
function genap (num) {
  if (num % 2 === 0){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}

ganjil(1)
ganjil(2)
genap(3)
genap(4)

function printTriangle(num){
  let triangle = ""
  for (let i = 0; i < num; i++){
    for (let j = 0; j <= i; j++){
      triangle = triangle + "*"
    }
    console.log(triangle)
    triangle = ""
  }
}

printTriangle(5)