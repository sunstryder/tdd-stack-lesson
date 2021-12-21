import { Stack } from '../lib/stack';

// Create a stack data structure in JS without using arrays.
// First in first out.
// Needs the following methods:
// push
// pop
// length
// peek
// clear

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
  it('can check length of stack', () => {
    stack.push('a');
    expect(stack.getLength()).toEqual(1);
  });
  
// peek
  it('can get top of stack', () => {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.peek()).toEqual('c');
  });
  
// clear
  it('can clear all items in stack',()=>{
    stack.push('a');
    stack.push('b');
    stack.clear();
    expect(stack.top).toBe(-1);
    expect(Object.keys(stack.items).length).toBe(0);
  });
});
