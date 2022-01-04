function gradeCheck (nilai){
  if(nilai >= 65){
    console.log ("Lulus!")
  } else {
    console.log ("Tidak Lulus")
  }
}

gradeCheck(96)

function printSquare(num){
  let square = ""
  for(let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      if (i === 0 || i === num-1){
        square = square + "*"
      } else {
        if (j === 0 || j === num-1) {
          square = square + "*"
        } else {
          square = square + " "
        }
      }
    }
    console.log(square)
    square = ""
  }
}

printSquare(4)