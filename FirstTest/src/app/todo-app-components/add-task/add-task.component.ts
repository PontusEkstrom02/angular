import { Component, Output, EventEmitter } from '@angular/core';
import { DescriptionItem } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  newTaskTitle: string = '';
  newTaskDescription: DescriptionItem[] = [];
  priorityOptions: string[] = ['high', 'medium', 'low'];
  selectedPriority: string = 'low';

  @Output() taskAdded = new EventEmitter<{ title: string, description: DescriptionItem[], priority: string}>();

  addTask(): void {
    if (this.newTaskTitle.trim() !== '') {
      this.taskAdded.emit({ title: this.newTaskTitle, description: this.newTaskDescription, priority: this.selectedPriority });
      this.newTaskTitle = '';
      this.newTaskDescription = [];
    }
  }
}
