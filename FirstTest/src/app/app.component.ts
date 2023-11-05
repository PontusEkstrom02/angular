import { Component } from '@angular/core';
import { DescriptionItem, Task } from './todo-app-components/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'FirstTest';
  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: [
        { text: 'learn Angular basics', completed: false },
        { text: 'learn Angular Advanced', completed: false },
        { text: 'learn LIA', completed: false }
      ],
      completed: false
    }
  ];

  onTaskAdded(task: { title: string, description: string[] }): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: task.title,
      description: task.description.map(descriptionText => ({
        text: descriptionText,
        completed: false
      })),
      completed: false
    };
    this.tasks.push(newTask);
  }
}
