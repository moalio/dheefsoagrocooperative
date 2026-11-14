import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Card } from '../../components/card/card';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { ContentService } from '../../services/content.service';

/** Details printed on the certificate. Files are in /public/assets. */
const CERTIFICATE = {
  image: '/assets/images/certificate.jpg',
  pdf: '/assets/documents/certificate.pdf',
  number: 'MOAI/COOP/JFS/0051/2026',
  issuer: 'Ministry of Agriculture and Irrigation, Federal Republic of Somalia',
  issued: '05/11/2026',
  validUntil: '06/11/2027',
  location: 'Jaran Village, Afgooye District, Lower Shabelle Region',
};

@Component({
  imports: [Card, PageBanner, SectionTitle],
  selector: 'app-governance-finance',
  styleUrl: './governance-finance.css',
  templateUrl: './governance-finance.html',
})
export class GovernanceFinance {
  private readonly content = inject(ContentService);

  readonly governance = toSignal(this.content.select('governanceFinance'));
  readonly certificate = CERTIFICATE;
}
