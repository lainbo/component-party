import { Component } from "@angular/core";

@Component({
  selector: "app-colors",
  template: `
    <ul>
      @for (color of colors; track color) {
        <li>{{ color }}</li>
      }
    </ul>
  `,
})
export class ColorsComponent {
  colors = ["红", "绿", "蓝"];
}
