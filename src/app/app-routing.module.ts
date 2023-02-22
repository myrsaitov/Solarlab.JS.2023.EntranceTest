import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./modules/todo-services/pages/list/list.component";
import {ListInWorkComponent} from "./modules/todo-services/pages/list-in-work/list-in-work.component";
import {ListCompletedComponent} from "./modules/todo-services/pages/list-completed/list-completed.component";
import {ListDeletedComponent} from "./modules/todo-services/pages/list-deleted/list-deleted.component";
import {ViewComponent} from "./modules/todo-services/pages/view/view.component";
import {CreateComponent} from "./modules/todo-services/pages/create/create.component";
import {EditComponent} from "./modules/todo-services/pages/edit/edit.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/all' },
  { path: 'all', component: ListComponent },
  { path: 'in_work', component: ListInWorkComponent },
  { path: 'completed', component: ListCompletedComponent },
  { path: 'deleted', component: ListDeletedComponent },
  { path: 'todos/:id', component: ViewComponent },
  { path: 'new', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
