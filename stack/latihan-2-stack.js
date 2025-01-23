class Stack {
   constructor () {
      this.items = [];
   }
   push(element) {
      this.items.push(element);
   }
   pop() {
      if (this.isEmpty()) {
         console.log("data kosong");
         return null;
      }
      return this.items.pop();
   }
   isEmpty() {
      return this.items.length == 0;
   }
   printStack() {
      console.log(this.items);
   }
}

const reverseString = (str) => {
   let stack = new Stack();
   // push ke items terlebih dahulu
   for (let index = 0; index < str.length; index++) {
      stack.push(str[index]);
   }
   // simpan value reverse
   let reverse = '';
   // lakukan perulangan untuk mengeluarkan stack dari atas dan disusun ke variabel reverse
   for (let index = 0; index < str.length; index++) {
      reverse += stack.pop()
   }
   stack.printStack();
   return reverse;
}

console.log(reverseString("abdel"));