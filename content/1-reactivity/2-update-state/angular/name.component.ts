import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-name",
  template: `<h1>你好 {{ name }}</h1>`,
})
export class NameComponent {
  name = "张三";

  constructor() {
    this.name = "李四";
  }
}

@NgModule({
  declarations: [NameComponent],
  exports: [NameComponent],
})
export class NameModule {}
