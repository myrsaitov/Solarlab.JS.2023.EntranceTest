import { ITodo } from './../../models/todo/i-todo';
import { TodoService } from './../../services/todo.service';
import {ChangeDetectorRef, Component, HostListener, ViewChild} from '@angular/core';
import { TodoStatus } from '../../enums/todo-status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
        // Относительные размеры области Virtual Scroller
        k_height = 1;
        k_width = 0.5;
      
        filterargs: any;
       
          // Хранит размеры области Virtual Scroller
          viewVirtualScrollerAreaHeight: any;
          viewVirtualScrollerAreaWidth: any;
      
          todos!: ITodo[];
      
   
          constructor(
            private cd: ChangeDetectorRef,
            private todoService: TodoService,
            private readonly router: Router) {
          }
      
          ngOnInit(){

            // Фильтр записей в зависимости от URL
            if (this.router.url === '/all')
            {
              this.filterargs = [
                TodoStatus.InWork,
                TodoStatus.Completed
              ];
            }
            else if (this.router.url === '/in_work')
            {
              this.filterargs = [
                TodoStatus.InWork
              ];
            }
            else if (this.router.url === '/completed')
            {
              this.filterargs = [
                TodoStatus.Completed
              ];
            }
            else if (this.router.url === '/deleted')
            {
              this.filterargs = [
                TodoStatus.Deleted
              ];
            }

            
              // Обновляет размеры карточки в соответсвии с размером экрана
              this.viewVirtualScrollerAreaHeight = window.innerHeight*this.k_height;
              this.viewVirtualScrollerAreaWidth = window.innerWidth*this.k_width;
      
              this.todoService.loadData();

              this.todoService.getTodoList().subscribe(response => {
                  this.todos = response;
                })
            }
      
        // Обработка события изменения размера главного окна
        @HostListener('window:resize', ['$event'])
        onResize(event: any) {
          this.viewVirtualScrollerAreaHeight = event.target.innerHeight*this.k_height;
          this.viewVirtualScrollerAreaWidth = event.target.innerWidth*this.k_width;
        }
      
        onVsUpdate(event: any) {
          console.log('vs update', event);
        }
      
        onVsChange(event: any) {
          console.log('vs change', event);
        }
      
        onVsStart(event: any) {
          console.log('vs start', event);
        }
      
        onVsEnd(event: any) {
          console.log('vs end', event);
        }
      
      
      
}
