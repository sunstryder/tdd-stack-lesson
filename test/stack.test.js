// Create a stack data structure in JS without using arrays.
// First in first out.
// Needs the following methods:
// push
// pop
// length
// peek
// clear

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
    // example items:
    // const items = {
    //   0: 'a',
    //   1: 'b',
    //   2: 'c'
    // };
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
}

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  // top
  it('has a reference to top item', () => { 
    expect(stack.top).toEqual(-1);
  })

  // items
  it('holds a collection of all items', () => {
    expect(stack.items).toEqual({});
  })

  // push
  it('can push to top of stack', () => {
    stack.push('a');
    expect(Object.keys(stack.items).length).toStrictEqual(1);
    expect(stack.items[0]).toEqual("a");
  });
  
  // pop
  it('can pop off top of stack', () => {
    stack.push('a');
    stack.pop();
    expect(stack.top).toEqual(-1);

   });
  
// length
  it.todo('can check length of stack')
  
// peek
  it.todo('can get top of stack')
  
// clear
  it.todo('can delete entire stack')
});
