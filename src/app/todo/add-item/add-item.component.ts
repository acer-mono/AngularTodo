import {Component, OnInit} from '@angular/core';
import {TodosService} from "../../todos.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  text = '';

  constructor(private todos: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodos() {
    if (this.text)
    {
      this.todos.addTodos(this.text);
      this.text = '';
    }
  }

}
