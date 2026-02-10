import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-user-profile",
  template: `
    <div>
      <h2>我的简介</h2>
      <p>用户名: {{ userService.user().username }}</p>
      <p>邮箱: {{ userService.user().email }}</p>
      <button (click)="userService.updateUsername('李四')">
        更新用户名为 李四
      </button>
    </div>
  `,
})
export class UserProfileComponent {
  protected userService = inject(UserService);
}
