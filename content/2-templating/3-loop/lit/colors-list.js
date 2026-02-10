import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("colors-list")
export class ColorsList extends LitElement {
  colors = ["红", "绿", "蓝"];

  render() {
    return html`
      <ul>
        ${repeat(
          this.colors,
          (color) => color,
          (color) => html`<li>${color}</li>`,
        )}
      </ul>
    `;
  }
}
