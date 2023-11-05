import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }
}
