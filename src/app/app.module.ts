import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskAddComponentComponent,
    TaskDetailComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
