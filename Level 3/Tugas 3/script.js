/*
Cara membuat function di javascript :

function namaFunction(parameterFunction <= (opsional) ){
  isi dari function
  return <= (opsional)
}
membuat function di javascript dilaksanakan dengan keyword function, kemudian diikuti dengan nama function kemudian buka kurung yang berisi parameter function, fucntion bisa tidak memiliki parameter atau memiliki satu atau lebih parameter

function bisa juga mengembalikan nilai dengan menggunakan keyword "return"

kemudian function harus dipanggil kembali untuk di eksekusi, dengan syntax sebagai berikut :
namaFunction(parameterFunction)
*/

function salam(nama) {
    return console.log("Halo " + nama + ", Selamat pagi");
}

salam("Azie");

function tambah(bilanganPertama, bilanganKedua) {
    return console.log(bilanganPertama + bilanganKedua);
}

tambah(1, 3);
