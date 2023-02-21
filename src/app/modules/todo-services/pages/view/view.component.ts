import { Component } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../services/todo.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
    id!: number;
    todo!: ITodo;
  
    constructor(
      public activatedRoute: ActivatedRoute,
      public todoService: TodoService
      ) { }
  
    ngOnInit() {
      this.todoService.loadData();
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.todoService.getTodoById(this.id).subscribe(response => {
        this.todo = response as ITodo;
      });
    }



  }
  