import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-colors",
  template: `
    <ul>
      <li *ngFor="let color of colors">{{ color }}</li>
    </ul>
  `,
})
export class ColorsComponent {
  colors = ["红", "绿", "蓝"];
}

@NgModule({
  declarations: [ColorsComponent],
  imports: [CommonModule],
  exports: [ColorsComponent],
})
export class ColorsModule {}
