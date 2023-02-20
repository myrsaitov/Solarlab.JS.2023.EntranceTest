import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoServicesModule } from './modules/todo-services/todo-services.module';
import {RouterModule} from "@angular/router";
import {ListComponent} from "./modules/todo-services/pages/list/list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent }
    ]),
    AppRoutingModule,
    TodoServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
