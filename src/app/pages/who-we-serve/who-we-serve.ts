import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Card } from '../../components/card/card';
import { Gallery } from '../../components/gallery/gallery';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { ContentService } from '../../services/content.service';

/** Photos of farmers, women and young people, from /public/assets/images. */
const GALLERY_IMAGES: string[] = [];

@Component({
  imports: [Card, Gallery, PageBanner, SectionTitle],
  selector: 'app-who-we-serve',
  styleUrl: './who-we-serve.css',
  templateUrl: './who-we-serve.html',
})
export class WhoWeServe {
  private readonly content = inject(ContentService);

  readonly serve = toSignal(this.content.select('whoWeServe'));
  readonly galleryImages = GALLERY_IMAGES;
}
