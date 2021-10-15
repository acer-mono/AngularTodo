import { Injectable } from '@angular/core';
import {Item} from "./todo/item/item.component";

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  private todos: Item[] = [];

  constructor() {
    this.todos = [{text: 'One', isDone: true}, {text: 'two', isDone: false}];
  }

  filterTodos(search: string) {
    return this.todos.filter(el => el.text.toUpperCase().includes(search.toUpperCase()));
  }

  addTodos(text: string): void {
    this.todos.push({text, isDone: false});
  }
}
