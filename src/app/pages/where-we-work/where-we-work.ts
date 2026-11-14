import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Card } from '../../components/card/card';
import { Gallery } from '../../components/gallery/gallery';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { VideoPlayer } from '../../components/video-player/video-player';
import { ContentService } from '../../services/content.service';

/** Media file names. Leave empty until you have the files. */
const FIELD_VIDEO = '';
const GALLERY_IMAGES: string[] = [];

@Component({
  imports: [Card, Gallery, PageBanner, SectionTitle, VideoPlayer],
  selector: 'app-where-we-work',
  styleUrl: './where-we-work.css',
  templateUrl: './where-we-work.html',
})
export class WhereWeWork {
  private readonly content = inject(ContentService);

  readonly work = toSignal(this.content.select('whereWeWork'));

  readonly fieldVideo = FIELD_VIDEO;
  readonly galleryImages = GALLERY_IMAGES;
}
