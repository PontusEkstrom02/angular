import { Component, Input } from '@angular/core';
import { Task, DescriptionItem } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  deleteItem(item: DescriptionItem, task: Task): void {
    const index = task.description.indexOf(item);
    if (index !== -1) {
      task.description.splice(index, 1);
    }
  }

  toggleItem(item: DescriptionItem): void {
    item.completed = !item.completed;
  }
}
