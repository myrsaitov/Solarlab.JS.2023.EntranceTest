import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ViewComponent } from './pages/view/view.component';
import {VirtualScrollerModule} from "ngx-virtual-scroller";
import { CreateComponent } from './pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { StatusFilterPipe } from './pipes/status-filter.pipe';

@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    StatusFilterPipe
  ],
    imports: [
        CommonModule,
        TodoServicesRoutingModule,
        VirtualScrollerModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TodoServicesModule { }
