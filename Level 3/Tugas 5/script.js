// Looping adalah suatu bentuk control structure di javascript selain if statement, looping berfungsi untuk mengeksekusi suatu rangkaian kode beberapa kali

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let biodata = {
  nama: "Azie",
  umur: 18,
  jurusan: "Teknik Informatika"
}



for (const data in biodata) {
  console.log(biodata[data])
}

const namaLengkap = [
  "Azie", "Melza", "Pratama"
]

for (const nama of namaLengkap) {
  console.log(nama)
}

let index = 0
while (index < 5) {
  index++;
  console.log("While loop")

}

index = -1
do {
  index++
  console.log("Do While")
} while (index > 0);

function loopFunction(num){
  for (let i = 0; i <= num; i++){
    console.log(i)
  }
}

loopFunction(3)

function fazztrack(num){
  console.log("Fazztrack function start")
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fazztrack")
    } else if (i % 3 === 0){
      console.log("fazz")
    } else if(i % 5 === 0) {
      console.log("track")
    } else {
      console.log(i)
    }
  }
}

fazztrack(15)
