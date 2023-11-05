import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent {
  test = 'IDK WHY BUT COOL IGUESS';
  fontColor = 'blue';
  testId = 1;
  canClick = true;
  messageEx1 = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }

  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
