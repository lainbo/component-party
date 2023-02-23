export class App {
  TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];
  lightIndex = 0;
  light: string = this.TRAFFIC_LIGHTS[this.lightIndex];

  nextLight() {
    if (this.lightIndex + 1 > this.TRAFFIC_LIGHTS.length - 1) {
      this.lightIndex = 0;
    } else {
      this.lightIndex++;
    }

    this.light = this.TRAFFIC_LIGHTS[this.lightIndex];
  }
}
