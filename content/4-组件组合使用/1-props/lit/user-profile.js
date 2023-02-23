import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile")
export class UserProfile extends LitElement {
  @property()
  name = "";

  @property({ type: Number })
  age = null;

  @property({ type: Array })
  favouriteColors = [];

  @property({ type: Boolean })
  isAvailable = false;

  render() {
    return html`
      <p>我的名字是 ${this.name}</p>
      <p>我的年龄是 ${this.age}</p>
      <p>My favourite coloros are ${this.favouriteColors.join(", ")}</p>
      <p>我现在 ${this.isAvailable ? '离职状态' : '在职'}</p>
    `;
  }
}
