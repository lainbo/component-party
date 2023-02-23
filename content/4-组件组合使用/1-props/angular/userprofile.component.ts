import { Component, Input } from "@angular/core";

@Component({
  selector: "app-userprofile",
  template: `
    <p>我的名字是 {{ name }}!</p>
    <p>我的年龄是 {{ age }}!</p>
    <p>我喜欢的颜色是 {{ favouriteColors.join(", ") }}!</p>
    <p>我现在 {{ isAvailable ? '离职状态' : '在职' }}</p>
  `,
})
export class UserprofileComponent {
  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() favouriteColors: string[] = [];
  @Input() isAvailable: boolean = false;
}
