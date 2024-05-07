import { Component } from "@angular/core";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

@Component({
  selector: "app-trafficlight",
  template: `
    <button (click)="nextLight()">下一个灯</button>
    <p>现在亮着的是: {{ light }}</p>
    <p>
      你应该
      <ng-container [ngSwitch]="light">
        <span *ngSwitchCase="'红灯'">停下</span>
        <span *ngSwitchCase="'黄灯'">慢行</span>
        <span *ngSwitchCase="'绿灯'">赶紧走</span>
      </ng-container>
    </p>
  `,
})
export class TrafficlightComponent {
  lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
}
