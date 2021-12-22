export class Stack {
    constructor() {
      this.clear();
  }
  
    push(value)
    {
      this.top++;
      this.items[this.top] = value;
      this.length++;
    } 
  
    pop() { 
      if (this.top === -1) throw "Stack empty, nothing to pop";
      delete this.items[this.top]
      this.top--;
      this.length--;
    }

    peek(){
      if (this.top === -1) return "Stack is empty";
      return this.items[this.top];
    }

    clear(){
      this.items = {};
      this.length = 0;
      this.top = -1;
    };
  
  }