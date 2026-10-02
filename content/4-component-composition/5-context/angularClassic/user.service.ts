import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  user = {
    id: 1,
    username: "abcdefg",
    email: "abcdefg@example.com",
  };

  updateUsername(username: string) {
    this.user.username = username;
  }
}
