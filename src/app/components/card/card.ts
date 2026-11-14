import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  readonly title = input.required<string>();
  readonly number = input<string | number>();
  readonly link = input<string>();
  readonly fragment = input<string>();
  readonly linkLabel = input('Learn more');
}
