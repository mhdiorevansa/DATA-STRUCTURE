const NamaBuah = (buah) => {
   // tambahkan elemen di akhir array
   buah.unshift("pisang");

   // hapus elemen di akhir array
   buah.pop();

   // cari index jeruk 
   let indexJeruk = buah.indexOf("jeruk");
   console.log(indexJeruk);

   // balikkan urutan array
   buah.reverse();

   // cari item yang lebih dari 5 karakter
   let fiveCharacter = [];
   for (let i = 0; i < buah.length; i++) {
      if (buah[i].length > 5) {
         fiveCharacter.push(buah[i]);
      }
   }
   return fiveCharacter;
}

console.log(NamaBuah(["apel", "mangga", "jeruk", "anggur"]));