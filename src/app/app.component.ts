import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TodoCategory } from './modules/todo-services/enums/todo-category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoCategory = TodoCategory;

  public selectedCategory = 2;
  isCollapsed = false;
  constructor(
    private location: Location
    ) { }

  goBack() {
    this.location.back();
  }

}
