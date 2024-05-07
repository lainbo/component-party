import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./user-profile";

@customElement("x-app")
export class XApp extends LitElement {
  render() {
    return html`<user-profile
      name="张三"
      age="20"
      .favouriteColors=${["green", "blue", "red"]}
      isavailable
    ></user-profile>`;
  }
}
