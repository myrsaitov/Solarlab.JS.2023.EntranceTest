import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFilterPipe } from './../../pipes/status-filter.pipe';
import { TodoService } from './../../services/todo.service';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { TodoCardComponent } from './../../components/todo-card/todo-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    ListComponent,
    TodoCardComponent,
    StatusFilterPipe
  ],
  imports: [
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ListRoutingModule
  ],
  exports: [ListComponent],
  providers: [TodoService]
})
export class ListModule { }
