import { Component } from '@angular/core';
import { Task } from './todo-app-components/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'FirstTest';
  tasks: Task[] = [
    { id: 1, description: 'Learn Angular', completed: false },
    { id: 2, description: 'Build a to-do list', completed: true }
  ];

  onTaskAdded(description: string): void {
    this.tasks.push({ id: this.tasks.length + 1, description, completed: false });
  }
}
