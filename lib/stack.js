export class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
  }
  
    push(value)
    {
      this.top++;
      this.items[this.top] = value;
    } 
  
    pop() { 
      if (this.top === -1) throw "Stack empty, nothing to pop";
      delete this.items[this.top]
      this.top--;
    }
  
    getLength(){
      return Object.keys(this.items).length;
    }

    peek(){
      if (this.top === -1) return "Stack is empty";
      return this.items[this.top];
    }

    clear(){
      for (let item in Object.keys(this.items)){
        delete this.items[item];
      };
      this.top = -1;
    };
  
  }