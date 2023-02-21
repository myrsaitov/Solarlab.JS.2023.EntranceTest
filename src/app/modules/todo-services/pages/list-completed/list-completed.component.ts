import { ITodo } from './../../models/todo/i-todo';
import { TodoService } from './../../services/todo.service';
import {ChangeDetectorRef, Component, HostListener, ViewChild} from '@angular/core';
import {VirtualScrollerComponent} from "ngx-virtual-scroller";

@Component({
  selector: 'app-list-completed',
  templateUrl: './list-completed.component.html',
  styleUrls: ['./list-completed.component.scss']
})
export class ListCompletedComponent {
      // Относительные размеры области Virtual Scroller
      k_height = 1;
      k_width = 0.5;
    
        // Хранит размеры области Virtual Scroller
        viewVirtualScrollerAreaHeight: any;
        viewVirtualScrollerAreaWidth: any;
    
        todos!: ITodo[];
    
        @ViewChild('scroll') scroller: VirtualScrollerComponent | undefined;
    
        constructor(private cd: ChangeDetectorRef,private todoService: TodoService) {
        }
    
        ngOnInit(){
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
