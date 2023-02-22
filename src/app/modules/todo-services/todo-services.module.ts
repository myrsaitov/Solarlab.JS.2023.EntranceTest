import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ViewComponent } from './pages/view/view.component';
import {VirtualScrollerModule} from "ngx-virtual-scroller";
import { ListInWorkComponent } from './pages/list-in-work/list-in-work.component';
import { ListCompletedComponent } from './pages/list-completed/list-completed.component';
import { ListDeletedComponent } from './pages/list-deleted/list-deleted.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent,
    ViewComponent,
    ListInWorkComponent,
    ListCompletedComponent,
    ListDeletedComponent,
    CreateComponent,
    EditComponent
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
