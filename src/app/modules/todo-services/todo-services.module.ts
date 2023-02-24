import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';
import { ViewComponent } from './pages/view/view.component';
import {VirtualScrollerModule} from "ngx-virtual-scroller";
import { CreateComponent } from './pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { ListModule } from './pages/list/list.module';

@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        TodoServicesRoutingModule,
        VirtualScrollerModule,
        FormsModule,
        ReactiveFormsModule,
        ListModule
    ]
})
export class TodoServicesModule { }
