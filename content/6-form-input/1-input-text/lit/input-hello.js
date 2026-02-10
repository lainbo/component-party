import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("input-hello")
export class InputHello extends LitElement {
  @state()
  text = "你好世界";

  handleInput(event) {
    this.text = event.target.value;
  }

  render() {
    return html`
      <p>${this.text}</p>
      <input value=${this.text} @input=${this.handleInput} />
    `;
  }
}
