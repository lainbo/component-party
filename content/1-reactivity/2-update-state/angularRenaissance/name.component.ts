import { Component, signal } from "@angular/core";

@Component({
  selector: "app-name",
  template: `<h1>你好 {{ name() }}</h1>`,
})
export class NameComponent {
  name = signal("张三");

  constructor() {
    this.name.set("李四");
  }
}
