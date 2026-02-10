import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-funny-button></app-funny-button>

    <app-funny-button>
      <ng-template #content>这是传到slot的内容!</ng-template>
    </app-funny-button>
  `,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [FunnyButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
