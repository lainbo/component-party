import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

@customElement("traffic-light")
export class TrafficLight extends LitElement {
  @state()
  lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    if (this.lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      this.lightIndex = 0;
    } else {
      this.lightIndex = this.lightIndex + 1;
    }
  }

  render() {
    return html`
      <button @click=${this.nextLight}>下一个灯</button>
      <p>现在亮着的是 ${this.light}</p>
      <p>
        你应该
        ${choose(this.light, [
          ["红灯", () => html`<span>停下</span>`],
          ["黄灯", () => html`<span>慢行</span>`],
          ["绿灯", () => html`<span>赶紧走</span>`],
        ])}
      </p>
    `;
  }
}
