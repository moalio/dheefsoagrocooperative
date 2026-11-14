import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Card } from '../../components/card/card';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { ContentService } from '../../services/content.service';

@Component({
  imports: [Card, PageBanner, SectionTitle],
  selector: 'app-impact-sustainability',
  styleUrl: './impact-sustainability.css',
  templateUrl: './impact-sustainability.html',
})
export class ImpactSustainability {
  private readonly content = inject(ContentService);

  readonly impact = toSignal(this.content.select('impactSustainability'));
}
