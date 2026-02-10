import { Component, output } from "@angular/core";

@Component({
  selector: "app-answer-button",
  template: `
    <button (click)="yes.emit()">是的！</button>
    <button (click)="no.emit()">不是！</button>
  `,
})
export class AnswerButtonComponent {
  yes = output();
  no = output();
}
