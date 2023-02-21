import { Component, Input } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {

    @Input() todo!: ITodo;

    constructor(public readonly todoService: TodoService ) {
      }

}
