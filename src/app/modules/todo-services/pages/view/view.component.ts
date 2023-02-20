import { Component,OnInit } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    id!: number;
    todo!: ITodo;
  
    constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }
  
    ngOnInit() {
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.todoService.getTodoById(this.id).subscribe(response => {
        this.todo = response as ITodo;
      });
    }
  
  }
  