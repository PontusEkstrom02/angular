import { Component, Input } from '@angular/core';
import { Task, DescriptionItem } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  editmode: boolean = false;

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

  onDescriptionAdded(descriptionItem: DescriptionItem, task: Task): void {
    task.description.push(descriptionItem);
  }
  
  onEdit(): void{
    this.editmode = !this.editmode;
  }

  showNote(item: DescriptionItem): void{
    item.showNote = !item.showNote;
  }
  
}
