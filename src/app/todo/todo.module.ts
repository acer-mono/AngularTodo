import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';



@NgModule({
    declarations: [
        ItemComponent,
        ListComponent
    ],
  exports: [
    ItemComponent,
    ListComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TodoModule { }
