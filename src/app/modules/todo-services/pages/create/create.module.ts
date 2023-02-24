import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './../../services/todo.service';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateRoutingModule
  ],
  exports: [CreateComponent],
  providers: [TodoService]
})
export class CreateModule { }
