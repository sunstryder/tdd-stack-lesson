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

  describe('top', ()=>{
    it('returns -1 when the stack is empty', ()=>{
      expect(stack.top).toEqual(-1);
    });

    it('returns the correct top item', ()=>{
      stack.push('topItem');
      stack.push('second');
      stack.pop();
      expect(stack.items[stack.top]).toBe('topItem');
    });
  });

  describe('items', ()=>{
    it('returns an empty object when the stack is empty', ()=>{
      expect(stack.items).toEqual({});
    });
    
    it('returns a non-empty object after an item has been added to the stack',()=>{
      stack.push('topItem');
      expect(stack.items[0]).toBeTruthy();
    });
  });

  describe('length', () =>{
    it('returns 0 when the stack is empty', () => {
      expect(stack.length).toEqual(0);
    });

    it('returns the correct length when there are items in the stack', () => {
      stack.push('a');
      expect(stack.length).toEqual(1);
    });
  });

  describe('push', ()=>{
    it('can push to top of stack', () => {
      stack.push('a')
      expect(Object.keys(stack.items).length).toEqual(1);
      expect(stack.items[0]).toEqual("a");
    });
  });

  describe('pop',()=>{
    it('throws error when the stack is empty with correct error message',() => {
      expect(() => stack.pop()).toThrow("Stack empty, nothing to pop");
    });
    
    it('pops off top of stack', () => {
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(Object.values(stack.items)).toContain('a');
      expect(Object.values(stack.items)).not.toContain('b');
    });
  });

  describe('peek', ()=>{
    it('returns "Stack is empty" message when the stack is empty', () => {
      expect(stack.peek()).toEqual('Stack is empty');
    }) 

    it('gets the top of the stack if there are items in stack', () => {
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.peek()).toEqual('c');
    });
  });

  describe('clear', ()=>{
    it('can clear all items in the full stack',()=>{
      stack.push('a');
      stack.push('b');
      stack.clear();
      expect(stack.top).toBe(-1);
      expect(Object.keys(stack.items).length).toBe(0);
      expect(stack.length).toBe(0);
    });
  });
});