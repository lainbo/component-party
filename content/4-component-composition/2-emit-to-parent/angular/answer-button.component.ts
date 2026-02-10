import { Component, Output, EventEmitter, NgModule } from "@angular/core";

@Component({
  selector: "app-answer-button",
  template: `
    <button (click)="yes.emit()">是的！</button>
    <button (click)="no.emit()">不是！</button>
  `,
})
export class AnswerButtonComponent {
  @Output() yes = new EventEmitter<void>();
  @Output() no = new EventEmitter<void>();
}

@NgModule({
  declarations: [AnswerButtonComponent],
  exports: [AnswerButtonComponent],
})
export class AnswerButtonModule {}
