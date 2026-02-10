import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: "app-pick-pill",
  template: `
    <div>你选择了: {{ picked() }}</div>

    <input id="blue-pill" type="radio" value="blue" [(ngModel)]="picked" />
    <label for="blue-pill">蓝色</label>

    <input id="red-pill" type="radio" value="red" [(ngModel)]="picked" />
    <label for="red-pill">红色</label>
  `,
})
export class PickPillComponent {
  picked = signal("red");
}
