import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export default class TrafficLight extends Component {
  @tracked lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight = () => {
    if (this.lightIndex + 1 > TRAFFIC_LIGHTS.length - 1) {
      this.lightIndex = 0;
    } else {
      this.lightIndex++;
    }
  };
}
