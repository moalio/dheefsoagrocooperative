import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Card } from '../../components/card/card';
import { Gallery } from '../../components/gallery/gallery';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContentService } from '../../services/content.service';

/** Photo file names inside /public/assets/images. Add yours here. */
const GALLERY_IMAGES: string[] = [];

/** The two photos beside the text. Files are in /public/assets/images. */
const ABOUT_IMAGES = ['crop.png', 'livestock.png'];

@Component({
  imports: [Card, Gallery, RevealDirective, SectionTitle],
  selector: 'app-about-us',
  styleUrl: './about-us.css',
  templateUrl: './about-us.html',
})
export class AboutUs {
  private readonly content = inject(ContentService);

  readonly about = toSignal(this.content.select('aboutUs'));
  readonly galleryImages = GALLERY_IMAGES;
  readonly aboutImages = ABOUT_IMAGES.map((name) => `/assets/images/${name}`);
}
