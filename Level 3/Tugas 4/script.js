/*
Cara membuat kondisional if else di javascript adalah dengan menggunakan kata if kemudian diikuti dengan kurung, yang dimana di dalam kurung tersebut berisi nilai boolean, yang apabila true maka perintah if akan di eksekusi, setelah ditutup kurung buka kurung kurawa kemudian isilah perintah yg akan di eksekusi if kemudia  tutup kurung kurawa, setelah ditutup, ikuti dengan kata else kemudian buka kurung kurawa lalu isi perintah yang akan di eksekusi apabila nilai kondisi if salah kemudian akhiri dengan tutup kurung

if (kondisi){
  //isi perintah
} else {
  //isi perintah
}
*/

function cekParameter(x){
  if(x !== undefined){
    console.log("Ini Parameternya " + x);
  } else {
    console.log("Tidak ada parameter yang diberikan");
  }
}

cekParameter("Melza");
cekParameter();