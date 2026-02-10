import { Component, OnDestroy, signal } from "@angular/core";

@Component({
  selector: "app-time",
  template: `<p>当前时间: {{ time() }}</p>`,
})
export class TimeComponent implements OnDestroy {
  time = signal(new Date().toLocaleTimeString());

  timer = setInterval(
    () => this.time.set(new Date().toLocaleTimeString()),
    1000,
  );

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
