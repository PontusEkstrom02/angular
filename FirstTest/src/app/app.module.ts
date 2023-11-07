import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TodoListComponent } from './todo-app-components/todo-list/todo-list.component';
import { AddTaskComponent } from './todo-app-components/add-task/add-task.component';
import { AddTextComponent } from './todo-app-components/add-text/add-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TodoListComponent,
    AddTaskComponent,
    AddTextComponent
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
