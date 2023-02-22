import { Component,OnInit } from '@angular/core';
import {ITodo} from "../../models/todo/i-todo";
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TodoStatus } from '../../enums/todo-status';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  id!: number;
  todo!: ITodo;
  form!: FormGroup;

  constructor(
    public readonly fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public todoService: TodoService
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
  }

  // Возвращает значение c формы соответсвующего поля
  get title() { return this.form.get('title'); }
  get body() { return this.form.get('body'); }

  // Нажатие на кнопку "Добавить объявление"
  submit()
  {

    // Если форма неправильно заполнена
    if (this.form.invalid) {
        return;
      }

    // Создает DTO объявления
    const model: Partial<ITodo> = {
        title: this.title?.value,
        body: this.body?.value,
        status: TodoStatus.InWork
      };


  }
}
