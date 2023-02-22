import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hello-world")
export class HelloWorld extends LitElement {
  render() {
    return html`<h1>这是一段示范文字</h1>`;
  }
}
