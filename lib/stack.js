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
      try {
        delete this.items[this.top]
        this.top--;

      } catch(error){
        console.log(error);
      }
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