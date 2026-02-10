import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("answer-button")
export class AnswerButton extends LitElement {
  clickYes() {
    this.dispatchEvent(new Event("yes"));
  }

  clickNo() {
    this.dispatchEvent(new Event("no"));
  }

  render() {
    return html`
      <button @click=${this.clickYes}>是的！</button>
      <button @click=${this.clickNo}>不是！</button>
    `;
  }
}
