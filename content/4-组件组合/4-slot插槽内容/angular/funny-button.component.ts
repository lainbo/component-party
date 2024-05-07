import { Component, ContentChild, TemplateRef } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./funny-button.component.css"],
  template: `
    <button>
      <ng-container *ngIf="content; else fallback" [ngTemplateOutlet]="content">
      </ng-container>

      <ng-template #fallback>
        <span>默认slot内容</span>
      </ng-template>
    </button>
  `,
})
export class FunnyButtonComponent {
  @ContentChild("content", { read: TemplateRef })
  content?: TemplateRef<unknown>;
}
