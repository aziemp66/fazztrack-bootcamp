const nama = "Azie Melza Pratama"
let umur = 18
let alamat = "Jl.Ekamai No.50, Kel.Sukadana, Kec.Kayuagung, Kab.OKI, Sumatera Selatan"
let hobi = "Programming, Heavy-Lifting"
const asalSekolah = "Universitas Sriwijaya"
const jurusan = "Teknik Informatika"
const alasanSukaProgramming = "Programming sangat menarik karena kita bisa mengendalikan mesin sesuai perintah kita, banyak sekali kreatifitas yg bisa dikembangkan dengan kemampuan itu"

console.log("Nama saya adalah "+ nama + ", asal Sekolah/Universitas : " + asalSekolah + " jurusan" + jurusan + ". Alasan saya sukan programming adalah " + alasanSukaProgramming +"\n")

console.log("Sebelum munculnya ES6, javascript hanya menggunakan satu tipe deklarasi variabel yaitu : 'var', namun ini dirubah setelah ES6 keatas karena var memiliki banyak masalah, contoh : \nvar foo = 'hello1'\nvar foo = 'hello2'\nconsole.log(foo) // ==> 'hello2'\nMasalahnya disini tidak ada pesan error sama sekali ketika terjadi duplikasi variabel. Tentu ini cukup riskan jika terjadi tanpa sengaja.\nHal ini membuat developer kebingungan, sehingga diciptakanlah let dan const di ES6 untuk memperbaiki bug tersebut\nUntuk perbedaan const dan let tersendiri sebenarnya sangat simpel, let bisa dirubah valuenya, namun const tidak bisa, hal ini biasanya digunakan developer untuk meningkatkan 'Code Readablity' agar developer yang bekerja sama di dalam sebuah projek bisa secara tidak langsung berkomunikasi bahwa suatu variabel akan berubah nilainya atau tidak")