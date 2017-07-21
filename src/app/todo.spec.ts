import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete: true,
      parent: 1
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
    expect(todo.parent).toEqual(1);
  });
});
