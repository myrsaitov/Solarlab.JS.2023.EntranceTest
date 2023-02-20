import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo/i-todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Фейковые данные
  fakeTodoList: ITodo[] = JSON.parse(JSON.stringify([
    {"id":1,"title":"Buy Oldsmobile","body":"posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor","status":0},
    {"id":2,"title":"Buy Jeep","body":"nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in","status":0},
    {"id":3,"title":"Sell Dodge","body":"sem duis aliquam convallis nunc proin at turpis a pede","status":0},
    {"id":4,"title":"Sell Mercedes-Benz","body":"velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus","status":1},
    {"id":5,"title":"Buy Ford","body":"justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse","status":1},
    {"id":6,"title":"Buy Volkswagen","body":"aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non","status":2},
    {"id":7,"title":"Buy Pontiac","body":"ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat","status":1},
    {"id":8,"title":"Repair Chrysler","body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum","status":1},
    {"id":9,"title":"Buy Chevrolet","body":"nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam","status":0},
    {"id":10,"title":"Sell Audi","body":"luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis","status":1},
    {"id":11,"title":"Repair Lincoln","body":"neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis","status":2},
    {"id":12,"title":"Clean Mercury","body":"vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non","status":1},
    {"id":13,"title":"Clean Chevrolet","body":"erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam","status":2},
    {"id":14,"title":"Sell Porsche","body":"nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan","status":0},
    {"id":15,"title":"Buy Land Rover","body":"nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac","status":0}
  ]));

  constructor() { }

  // Возвращает список Todo
  getTodoList() {
    return of(this.fakeTodoList);
  }

  // Возвращает Todo по Id
  getTodoById(id: number) {
    return of(this.fakeTodoList.find(item => item.id === id));
  }

}
