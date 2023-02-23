import { Component } from "@angular/core";

@Component({
  selector: "app-pick-pill",
  template: `
    <div>你选择了: {{ picked }}</div>

    <input
      id="blue-pill"
      [checked]="picked === 'blue'"
      type="radio"
      value="blue"
      (change)="handleChange($event)"
    />
    <label for="blue-pill">蓝色</label>

    <input
      id="red-pill"
      [checked]="picked === 'red'"
      type="radio"
      value="red"
      (change)="handleChange($event)"
    />
    <label for="red-pill">红色</label>
  `,
})
export class PickPillComponent {
  picked = "red";

  handleChange(event) {
    this.picked = event.target.value;
  }
}
