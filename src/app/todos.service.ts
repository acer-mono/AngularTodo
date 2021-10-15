import {Injectable} from '@angular/core';
import {Item} from "./todo/item/item.component";

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  private todos: Item[] = [];

  constructor() {
    this.todos = [{id: '1', text: 'One', isDone: true}, {id: '2', text: 'two', isDone: false}];
  }

  filterTodos(search: string): Item[] {
    return this.todos.filter(el => el.text.toUpperCase().includes(search.toUpperCase()));
  }

  addTodos(text: string): void {
    this.todos.push({id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), text, isDone: false});
  }

  removeTodo(id: string): void {
    this.todos = this.todos.filter(el => el.id != id);
  }

  updateTodo(text: Item): void {

  }
}
