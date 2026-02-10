const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export class App {
  lightIndex = 0;
  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
}
