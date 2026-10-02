import { Component, NgModule } from "@angular/core";
import { FunnyButtonModule } from "./funny-button.component";

@Component({
  selector: "app-root",
  template: `<app-funny-button>点我!</app-funny-button>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [FunnyButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
