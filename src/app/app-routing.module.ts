import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/all' },
  { path: 'all', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'in_work', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'completed', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },
  { path: 'deleted', loadChildren: () => import('./modules/todo-services/pages/list/list.module').then(m => m.ListModule) },

  //{ path: 'all', component: ListComponent },
  //{ path: 'in_work', component: ListComponent },
  //{ path: 'completed', component: ListComponent },
  //{ path: 'deleted', component: ListComponent },
  //{ path: 'todos/:id', component: ViewComponent },
  //{ path: 'new', component: CreateComponent },
  //{ path: 'edit/:id', component: EditComponent },
 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
