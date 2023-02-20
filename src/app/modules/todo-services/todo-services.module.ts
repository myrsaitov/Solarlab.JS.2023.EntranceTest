import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ViewComponent } from './pages/view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    TodoServicesRoutingModule
  ]
})
export class TodoServicesModule { }
