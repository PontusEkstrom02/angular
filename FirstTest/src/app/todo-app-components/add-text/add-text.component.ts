import { Component, Output, EventEmitter } from '@angular/core';
import { DescriptionItem } from '../task.model';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.sass']
})
export class AddTextComponent {
  @Output() descriptionAdded = new EventEmitter<DescriptionItem>();

  newTaskDescriptionItem: string = '';
  newNote: string = ''

  addItem(descriptionText: string): void {
    if (descriptionText.trim() !== '') {
      const newDescriptionItem: DescriptionItem = {
        text: descriptionText,
        completed: false,
        note: this.newNote,
        showNote: false
      };

      this.descriptionAdded.emit(newDescriptionItem);
      this.newTaskDescriptionItem = ''; // Clear the input field after adding the item
    }
  }
}
