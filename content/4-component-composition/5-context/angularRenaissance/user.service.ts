import { Injectable, signal } from "@angular/core";

@Injectable()
export class UserService {
  user = signal({
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  });

  updateUsername(username: string) {
    this.user.update((user) => ({ ...user, username }));
  }
}
