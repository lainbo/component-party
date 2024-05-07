import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-userprofile
      name="张三"
      [age]="20"
      [favouriteColors]="['green', 'blue', 'red']"
      [isAvailable]="true"
    >
    </app-userprofile>
  `,
})
export class AppComponent {}
