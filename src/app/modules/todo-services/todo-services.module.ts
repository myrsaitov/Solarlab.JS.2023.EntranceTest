import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';
import { ListComponent } from './pages/list/list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    TodoServicesRoutingModule
  ]
})
export class TodoServicesModule { }
