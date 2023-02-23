import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <p>你快乐吗?</p>

    <app-answer-button (yes)="onAnswerYes()" (no)="onAnswerNo()">
    </app-answer-button>

    <p style="font-size: 50px">{{ happy ? "😀" : "😥" }}</p>
  `,
})
export class AppComponent {
  happy = true;

  onAnswerYes() {
    this.happy = true;
  }

  onAnswerNo() {
    this.happy = false;
  }
}
