import { Component,OnInit } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    id!: number;
    todo!: ITodo;
  
    constructor(
      public activatedRoute: ActivatedRoute,
      public todoService: TodoService,
      private location: Location
      ) { }
  
    ngOnInit() {
      this.todoService.loadData();
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.todoService.getTodoById(this.id).subscribe(response => {
        this.todo = response as ITodo;
      });
    }

    goBack() {
      this.location.back();
    }

  }
  