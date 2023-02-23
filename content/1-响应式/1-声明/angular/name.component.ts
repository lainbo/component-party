import { Component } from "@angular/core";

@Component({
  selector: "app-name",
  template: `<h1>你好 {{ name }}</h1>`,
})
export class NameComponent {
  name = "张三";
}
