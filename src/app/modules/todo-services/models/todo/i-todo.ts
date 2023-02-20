import {TodoStatus} from "../../enums/todo-status";

// Модель одного дела из списка
export interface ITodo {
  
  // Идентификатор
  id: number;

  // Заголовок
  title: string;

  // Подробное описание
  body: string;

  // Текущее состояние дела
  status: TodoStatus;
  
  }
