import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoServicesRoutingModule } from './todo-services-routing.module';

import { ListModule } from './pages/list/list.module';
import { CreateModule } from './pages/create/create.module';
import { EditModule } from './pages/edit/edit.module';
import { ViewModule } from './pages/view/view.module';

@NgModule({
  declarations: [  ],
    imports: [
        TodoServicesRoutingModule,
        ListModule,
        CreateModule,
        EditModule,
        ViewModule
    ]
})
export class TodoServicesModule { }
