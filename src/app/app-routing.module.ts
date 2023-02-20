import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./modules/todo-services/pages/list/list.component";
import {ViewComponent} from "./modules/todo-services/pages/view/view.component";

const routes: Routes = [
    {
        path: '',
        component: ListComponent
      },
      {
        path: 'todos/:id',
        component: ViewComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
