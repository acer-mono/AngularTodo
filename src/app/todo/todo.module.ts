import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { AddItemComponent } from './add-item/add-item.component';



@NgModule({
    declarations: [
        ItemComponent,
        ListComponent,
        SearchComponent,
        AddItemComponent
    ],
    exports: [
        ItemComponent,
        ListComponent,
        AddItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TodoModule { }
