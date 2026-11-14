import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-banner',
  styleUrl: './page-banner.css',
  templateUrl: './page-banner.html',
})
export class PageBanner {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly image = input<string>();
}
