import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-helloworld",
  template: `<h1>你好，世界</h1>`,
})
export class HelloworldComponent {}

@NgModule({
  declarations: [HelloworldComponent],
  exports: [HelloworldComponent],
})
export class HelloworldModule {}
