import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>计数器: {{ count() }}</p>
    <button (click)="incrementCount()">+1</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  incrementCount() {
    this.count.update((count) => count + 1);
  }
}
