class Queue {
   constructor() {
      this.items = [];
   }

   // menambahkan elemen di akhir antrian
   enqueue(element) {
      this.items.push(element)
      console.log(`${element} berhasil ditambahkan kedalam antrian`);
   }

   // mengeluarkan elemen dari depan antrian
   dequeue() {
      if (this.isEmpty()) {
         console.log("antrian kosong");
         return null;
      }
      this.items.shift();
   }

   // mengakses elemen pertama
   front() {
      if (this.isEmpty()) {
         console.log("antian kosong");
         return null;
      }
      return this.items[0];
   }

   // check apakah antrian kosong
   isEmpty() {
      return this.items.length == 0;
   }

   // check jumlah elemen dalam antrian
   size() {
      return this.items.length;
   }

   // cetak queue
   printQueue() {
      console.log("Antrian saat ini: " + this.items.join(' '));
   }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.printQueue();
console.log(queue.front());
console.log(queue.size());
