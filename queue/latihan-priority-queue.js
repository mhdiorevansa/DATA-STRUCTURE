class PriorityQueue {
   constructor() {
      this.items = [];
   }
   // tambahkan element ke antrian prioritas
   enqueue(element, priority) {
      const newItem = {value: element, priority: priority};
      let added = false;
      // cari posisi untuk menyisipkan elemen berdasarkan prioritas
      for(let index = 0; index < this.items.length; index++) {
         // jika prioritas index lebih besar dari prioritas elemen baru
         if(this.items[index].priority > priority) {
            this.items.splice(index, 0, newItem); // sisipkan elemen
            added = true;
            break;
         }
      }
      // jika tidak ada elemen dengan prioritas yang lebih tinggi
      if(!added) {
         this.items.push(newItem);
      }
      console.log(`${element} dengan prioritas ${priority} ditambahkan`);
   }
   // menghapus prioritas tertinggi 
   dequeue() {
      if (this.isEmpty()) {
         console.log("antrian kosong");
         return null;
      }
      return this.items.shift();
   }
   // melihat elemen dengan prioritas tertinggi
   front() {
      if(this.isEmpty()) {
         console.log("antrian kosong");
         return null;
      }
      return this.items[0];
   }
   // mengecheck apakah antrian kosong
   isEmpty() {
      return this.items.length == 0;
   }
   // mencetak antrian
   printQueue() {
      console.log("Antrian saat ini: " + this.items.map((item) => `${item.value} prioritas ${item.priority}`).join(', ')); 
   }
}

const pq = new PriorityQueue();
pq.enqueue("Pasien A", 1);
pq.enqueue("Pasien B", 2);
pq.enqueue("Pasien C", 3);
pq.printQueue();
