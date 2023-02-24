import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFilterPipe } from './../../pipes/status-filter.pipe';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { TodoCardComponent } from './../../components/todo-card/todo-card.component';


@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent,
    StatusFilterPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
