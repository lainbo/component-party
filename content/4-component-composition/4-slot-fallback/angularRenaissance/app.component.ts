import { Component } from "@angular/core";
import { FunnyButtonComponent } from "./funny-button.component";

@Component({
  selector: "app-root",
  imports: [FunnyButtonComponent],
  template: `
    <app-funny-button />

    <app-funny-button>这是传到slot的内容!</app-funny-button>
  `,
})
export class AppComponent {}
