import { Component } from "@angular/core";

@Component({
  selector: "app-is-available",
  template: `
    <input
      id="is-available"
      type="checkbox"
      [checked]="isAvailable"
      (change)="handleChange()"
    />
    <label for="is-available">这是一个checkbox</label>
  `,
})
export class IsAvailableComponent {
  isAvailable = false;

  handleChange() {
    this.isAvailable = !this.isAvailable;
  }
}
