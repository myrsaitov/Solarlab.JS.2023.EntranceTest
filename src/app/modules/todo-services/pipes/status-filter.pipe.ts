import { Pipe, PipeTransform } from '@angular/core';
import { TodoStatus } from '../enums/todo-status';
import { ITodo } from '../models/todo/i-todo';

// https://embed.plnkr.co/l1oTNT/

@Pipe({
    name: 'myfilter',
    pure: false
})
export class StatusFilterPipe implements PipeTransform {
    transform(items: ITodo[], statuses: TodoStatus[]): ITodo[] {
        if (!items || !statuses) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter((item: ITodo) => this.applyFilter(item, statuses));
    }

    applyFilter(todo: ITodo, statuses: TodoStatus[]): boolean {
        for(let status of statuses){
          if(todo.status == status)
          {return true}
        }
        return false;
    }
        
      
}