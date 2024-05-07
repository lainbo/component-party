import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("css-style")
export class CssStyle extends LitElement {
  static styles = css`
    .title {
      color: red;
    }
  `;

  render() {
    return html`
      <h1 class="title">我是红色的</h1>
      <button style=${styleMap({ fontSize: "10rem" })}>我是一个按钮</button>
    `;
  }
}
