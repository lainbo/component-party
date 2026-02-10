import { Component } from "@angular/core";
import { FunnyButtonComponent } from "./funny-button.component";

@Component({
  selector: "app-root",
  imports: [FunnyButtonComponent],
  template: `<app-funny-button>点我!</app-funny-button>`,
})
export class AppComponent {}
