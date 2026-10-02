import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  template: `
    @if (userService.usersResource.isLoading()) {
      <div>正在获取用户信息……</div>
    } @else if (userService.usersResource.error()) {
      <p>获取用户信息出错</p>
    } @else {
      <ul>
        @for (
          user of userService.usersResource.value()?.results ?? [];
          track user
        ) {
          <li>
            <img [src]="user.picture.thumbnail" alt="用户" />
            <p>{{ user.name.first }} {{ user.name.last }}</p>
          </li>
        } @empty {
          <p>未找到用户</p>
        }
      </ul>
    }
  `,
})
export class UsersComponent {
  protected userService = inject(UserService);
}
