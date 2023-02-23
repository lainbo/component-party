import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("colors-list")
export class ColorsList extends LitElement {
  colors = ["红", "绿", "蓝"];

  render() {
    return html`
      <ul>
        ${this.colors.map((color) => html`<li>${color}</li>`)}
      </ul>
    `;
  }
}
