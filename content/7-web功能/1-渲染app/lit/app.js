import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("x-app")
export class XApp extends LitElement {
  render() {
    return html`<h1>这是一段示范文字</h1>`;
  }
}
