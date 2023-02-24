import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './../../services/todo.service';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditRoutingModule
  ],
  exports: [EditComponent],
  providers: [TodoService]
})
export class EditModule { }
