import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './../../services/todo.service';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ViewRoutingModule
  ],
  exports: [ViewComponent],
  providers: [TodoService]
})
export class ViewModule { }
