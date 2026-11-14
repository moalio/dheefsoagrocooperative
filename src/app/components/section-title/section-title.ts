import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-title',
  styleUrl: './section-title.css',
  templateUrl: './section-title.html',
})
export class SectionTitle {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly align = input<'center' | 'left'>('center');
}
