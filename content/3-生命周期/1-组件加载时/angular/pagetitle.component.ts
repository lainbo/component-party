import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagetitle",
  template: `<p>页面标题: {{ pageTitle }}</p>`,
})
export class PagetitleComponent implements OnInit {
  pageTitle = "";

  ngOnInit() {
    this.pageTitle = document.title;
  }
}
