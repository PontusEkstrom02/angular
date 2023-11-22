import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-app-components/todo-list/todo-list.component';
import { AddTaskComponent } from './todo-app-components/add-task/add-task.component';
import { AddTextComponent } from './todo-app-components/add-text/add-text.component';
import { TodoListSiteComponent } from './todo-app-components/todo-list-site/todo-list-site.component';
import { WheatherSiteComponent } from './wheater-app-components/wheather-site/wheather-site.component';
import { WeatherDisplayComponent } from './wheater-app-components/wheater-site-components/weather-display/weather-display.component';
import { WheaterSearchBarComponent } from './wheater-app-components/wheater-site-components/wheater-search-bar/wheater-search-bar.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListSiteComponent },
  { path: 'Weather-app', component: WheatherSiteComponent },
  // Add more routes for other pages as needed
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTaskComponent,
    AddTextComponent,
    TodoListSiteComponent,
    WheatherSiteComponent,
    WeatherDisplayComponent,
    WheaterSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
