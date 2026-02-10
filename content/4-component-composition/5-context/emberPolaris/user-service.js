import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class UserServiceService extends Service {
  @tracked id = 1;
  @tracked username = "abcdefg";
  @tracked email = "abcdefg@example.com";

  get user() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
    };
  }

  updateUserName = (newUsername) => {
    this.username = newUsername;
  };
}
