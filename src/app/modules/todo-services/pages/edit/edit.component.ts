import { Component } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

    id!: number;
    todo!: ITodo;
    form!: FormGroup;
   // formData: FormData = new FormData();
  
    constructor(
      public readonly fb: FormBuilder,
      public activatedRoute: ActivatedRoute,
      public todoService: TodoService,
      private readonly router: Router
      ) { }
  
    ngOnInit() {
  
      // Валидаторы
      this.form = this.fb.group({
          title: ['', [Validators.required, Validators.maxLength(100)]],
          body: ['', [Validators.required, Validators.maxLength(1000)]]
          });
  
      this.todoService.loadData();
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.todoService.getTodoById(this.id).subscribe(response => {
        this.todo = response as ITodo;
      });

      this.title?.patchValue(this.todo.title);
      this.body?.patchValue(this.todo.body);

    }
  
    // Возвращает значение c формы соответсвующего поля
    get title() { return this.form.get('title'); }
    get body() { return this.form.get('body'); }
  
    // Нажатие на кнопку "Добавить объявление"
    submit()
    {
  
      // Если форма неправильно заполнена
      if (this.form.invalid) {
          //return;
        }
  
      // Редактирует DTO объявления
      this.todoService.getTodoById(this.id).subscribe(response => {
        this.todo = response as ITodo;
      });

      this.todo.title = this.title?.value;
      this.todo.body = this.body?.value;

      // Сохраняет данные
      this.todoService.saveData();
      this.router.navigate(['/']);
      
    }
  }
  
