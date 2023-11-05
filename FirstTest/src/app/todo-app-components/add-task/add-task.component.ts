import { Component, Output, EventEmitter } from '@angular/core';
import { Task, DescriptionItem } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  newTaskTitle: string = '';
  newTaskDescription: string[] = [];
  newTaskDescriptionItem: string = '';

  @Output() taskAdded = new EventEmitter<{ title: string, description: string[] }>();

  addItem(descriptionText: string): void {
    if (descriptionText.trim() !== '') {
      this.newTaskDescription.push(descriptionText);
    }
  }

  addTask(): void {
    if (this.newTaskTitle.trim() !== '' && this.newTaskDescription.length > 0) {
      this.taskAdded.emit({ title: this.newTaskTitle, description: this.newTaskDescription });
      this.newTaskTitle = '';
      this.newTaskDescription = [];
    }
  }
}
