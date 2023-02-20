import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoServicesModule } from './modules/todo-services/todo-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
