import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';
import { ContentService } from '../../services/content.service';

@Component({
  imports: [RouterLink, RevealDirective],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly content = inject(ContentService);

  readonly site = toSignal(this.content.select('site'));
  readonly year = new Date().getFullYear();}
