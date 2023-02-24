import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/all' },
  { path: 'all', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'in_work', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'completed', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'deleted', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'todos/:id', loadChildren: () => import('./modules/todo-services/pages/view/view.module').then(m => m.ViewModule) },
  { path: 'new', loadChildren: () => import('./modules/todo-services/pages/create/create.module').then(m => m.CreateModule) },
  { path: 'edit/:id', loadChildren: () => import('./modules/todo-services/pages/edit/edit.module').then(m => m.EditModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
