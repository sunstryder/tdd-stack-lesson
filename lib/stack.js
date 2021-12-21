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
      this.top--;
      delete this.items[this.top]
    }
  
    getLength(){
      return Object.keys(this.items).length;
    }

    peek(){
      return this.items[this.top];
    }

    clear(){
      for (let item in Object.keys(this.items)){
        delete this.items[item];
      };
      this.top = -1;
    };
  
  }