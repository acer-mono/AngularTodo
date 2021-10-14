import {Component, Input, OnInit} from '@angular/core';

export type Item = {
  text: string;
  isDone: boolean;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {text: '', isDone: false};

  isEditable: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editOrSave() {
    this.isEditable = !this.isEditable;
  }
}
