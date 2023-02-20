import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./modules/todo-services/pages/list/list.component";
import {ViewComponent} from "./modules/todo-services/pages/view/view.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/all' },
  { path: 'all', component: ListComponent },
  { path: 'in_work', component: ListComponent },
  { path: 'completed', component: ListComponent },
  { path: 'deleted', component: ListComponent },
  { path: 'todos/:id', component: ViewComponent }

 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
