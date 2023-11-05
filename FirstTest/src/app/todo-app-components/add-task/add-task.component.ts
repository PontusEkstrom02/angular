import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  newTaskDescription: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask(): void {
    if (this.newTaskDescription.trim() !== '') {
      this.taskAdded.emit(this.newTaskDescription);
      this.newTaskDescription = '';
    }
  }
}
