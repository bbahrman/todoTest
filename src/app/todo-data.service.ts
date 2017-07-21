import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  // placeholder for last id for simulation
  // automatic incrementing of ids
  lastId: number = 0;

  // placeholder for todos
  todos: Todo[] = [];

  constructor() {

  }

  // simulate POST / TODOs
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  getSubTasks(id: number): Todo[] {
    this.todos = this.todos
      .filter(todo => todo.parent === id);
    return this.todos;
  }

  // simulate Put /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
