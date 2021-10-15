import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from "../../todos.service";

export type Item = {
  id: string;
  text: string;
  isDone: boolean;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  isEditable: boolean = false;

  constructor(private todos: TodosService) {
  }

  ngOnInit(): void {
  }

  editOrSave() {
    this.isEditable = !this.isEditable;
  }

  remove(id: string) {
    this.todos.removeTodo(id);
  }
}
