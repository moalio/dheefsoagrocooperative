import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { Card } from '../../components/card/card';
import { Gallery } from '../../components/gallery/gallery';
import { RevealDirective } from '../../directives/reveal.directive';
import { SectionTitle } from '../../components/section-title/section-title';
import { ContentService } from '../../services/content.service';

/** Media file names. Change these to match the files in /public/assets. */
const HERO_IMAGE = '/assets/images/hero.jpg';

const GALLERY_IMAGES: string[] = [];

@Component({
  imports: [RouterLink, Card, Gallery, RevealDirective, SectionTitle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly content = inject(ContentService);

  readonly site = toSignal(this.content.select('site'));
  readonly home = toSignal(this.content.select('home'));
  readonly work = toSignal(this.content.select('whatWeDo'));

  readonly heroImage = `url(${HERO_IMAGE})`;
  readonly galleryImages = GALLERY_IMAGES;
}
