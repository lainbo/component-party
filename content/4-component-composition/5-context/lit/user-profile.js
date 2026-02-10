import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";

import { userContext } from "./user-context";

@customElement("user-profile")
export class UserProfile extends LitElement {
  @consume({ context: userContext })
  @property({ type: Object, attribute: false })
  user;

  @property({ type: Function, attribute: false })
  updateUsername;

  handleUpdateUsername() {
    this.updateUsername("李四");
  }

  render() {
    return html`
      <div>
        <h2>我的简介</h2>
        <p>用户名: ${this.user.username}</p>
        <p>邮箱: ${this.user.email}</p>
        <button @click="${this.handleUpdateUsername}">更新用户名为 李四</button>
      </div>
    `;
  }
}
