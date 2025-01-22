let LatihanArray = (num) => {
   // tambah angka 40 di akhir
   num.push(40);
   // hapus index ke 0
   num.shift();
   // cetak semua angka menggunakan loop
   for (let i = 0; i < num.length; i ++) {
      console.log(num[i]);
   }
   // hitung jumlah elemen dalam array
   console.log(num.length);
   return num;
}

console.log(LatihanArray([10, 20, 30]))