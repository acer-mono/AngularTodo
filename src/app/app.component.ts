import {Component} from '@angular/core';
import {TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  search = '';

  constructor(private todos: TodosService) {
  }

  getTodos() {
    return this.todos.filterTodos(this.search);
  }
}
