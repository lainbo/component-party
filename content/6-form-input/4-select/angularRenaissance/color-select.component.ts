import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: "app-color-select",
  template: `
    <select [(ngModel)]="selectedColorId">
      @for (let color of colors; track color) {
        <option [value]="color.id" [disabled]="color.isDisabled">
          {{ color.text }}
        </option>
      }
    </select>
  `,
})
export class ColorSelectComponent {
  selectedColorId = signal(2);

  colors = [
    { id: 1, text: "红" },
    { id: 2, text: "蓝" },
    { id: 3, text: "绿" },
    { id: 4, text: "灰", isDisabled: true },
  ];
}
