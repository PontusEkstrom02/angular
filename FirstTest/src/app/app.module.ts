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
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { WeatherAppSiteComponent } from './weather-app-components/weather-app-site/weather-app-site.component';
import { WeatherDisplayComponent } from './weather-app-components/weather-components/weather-display/weather-display.component';
import { WeatherSearchBarComponent } from './weather-app-components/weather-components/weather-search-bar/weather-search-bar.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListSiteComponent },
  { path: 'Weather-app', component: WeatherAppSiteComponent },
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
    HeaderNavComponent,
    WeatherAppSiteComponent,
    WeatherDisplayComponent,
    WeatherSearchBarComponent
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
