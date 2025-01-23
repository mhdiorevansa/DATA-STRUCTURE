class Stack {
   constructor () {
      // di javascript, tidak perlu mendefinisikan property terlebih dahulu. tidak seperti di php menggunakan public $items
      this.items = []; // array untuk menympan elemen stack
   }

   // tambahkan elemen ke stack menggunakan push
   push(element) {
      this.items.push(element);
      console.log(`${element} berhasil ditambahkan kedalam stack`)
   }

   // hapus elemen dari stack menggunakan pop
   pop() {
      if(this.isEmpty()) {
         console.log("stack kosong, tidak ada elemen yang perlu dihapus");
         return null;
      }
      const removedItem = this.items.pop();
      console.log(`${removedItem} berhasil dihapus dari stack`)
   }

   // lihat elemen paling atas
   peek() {
      if (this.isEmpty()) {
         console.log("stack kosong");
         return null;
      }
      console.log(`elemen stack paling atas: ${this.items[this.items.length - 1]}`);
      return this.items[this.items.length - 1];
   }

   // periksa apakah stack kosong?
   isEmpty() {
      return this.items.length == 0;
   }
   
   // hitung jumlah elemen dalam stack
   size() {
      console.log(`jumlah elemen dalam stack adalah: ${this.items.length}`)
      return this.items.length;
   }

   // tampilkan semua elemen stack
   printStack() {
      console.log(`isi stack: ${this.items}`)
   }
}

const bukuStack = new Stack();
bukuStack.push("naruto");
bukuStack.push("dragonball");
bukuStack.push("bakugan");
bukuStack.peek();
bukuStack.pop();
bukuStack.size();
bukuStack.printStack();
