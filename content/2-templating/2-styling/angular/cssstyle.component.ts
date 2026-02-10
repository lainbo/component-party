import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-cssstyle",
  template: `
    <h1 class="title">我是红色的</h1>
    <button style="font-size: 10rem">我是一个按钮</button>
  `,
  styles: [
    `
      .title {
        color: red;
      }
    `,
  ],
})
export class CssStyleComponent {}

@NgModule({
  declarations: [CssStyleComponent],
  exports: [CssStyleComponent],
})
export class CssStyleModule {}
