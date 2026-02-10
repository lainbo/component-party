import { Component, computed, signal } from "@angular/core";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

@Component({
  selector: "app-traffic-light",
  template: `
    <button (click)="nextLight()">下一个灯</button>
    <p>现在亮着的是: {{ light() }}</p>
    <p>
      你应该
      @switch (light()) {
        @case ("红灯") {
          <span>停下</span>
        }
        @case ("黄灯") {
          <span>慢行</span>
        }
        @case ("绿灯") {
          <span>赶紧走</span>
        }
      }
    </p>
  `,
})
export class TrafficLightComponent {
  lightIndex = signal(0);

  light = computed(() => TRAFFIC_LIGHTS[this.lightIndex()]);

  nextLight() {
    this.lightIndex.update((index) => (index + 1) % TRAFFIC_LIGHTS.length);
  }
}
