import { Component, OnInit } from '@angular/core';
import { ITodo } from './../../models/todo/i-todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    todos!: ITodo[];
  
    constructor(private todoService: TodoService) { }
  
    ngOnInit() {
      this.todoService.getTodoList().subscribe(response => {
        this.todos = response;
      })
    }
  
  }