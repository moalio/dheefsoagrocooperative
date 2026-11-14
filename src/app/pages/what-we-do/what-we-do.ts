import { Component, ElementRef, HostListener, OnDestroy, effect, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Card } from '../../components/card/card';
import { Gallery } from '../../components/gallery/gallery';
import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { RevealDirective } from '../../directives/reveal.directive';
import { VideoPlayer } from '../../components/video-player/video-player';
import { ContentService } from '../../services/content.service';

interface AreaMedia {
  images?: string[];
  video?: string;
}

/**
 * Media for each area, taken from /public/assets/images and /public/assets/videos.
 * The keys are the area ids. Example:
 *   'livestock-production': { images: ['livestock-01.jpg'], video: 'livestock.mp4' }
 *
 * Area ids:
 *   crop-production-and-horticulture
 *   sustainable-land-management-and-ecosystem-restoration
 *   water-management-and-irrigation
 *   livestock-production
 *   agricultural-inputs-and-farm-services
 *   post-harvest-handling-storage-and-processing
 *   farmer-training-and-agricultural-extension
 *   agricultural-business-and-market-development
 */
const AREA_MEDIA: Record<string, AreaMedia> = {
  'crop-production-and-horticulture': { images: ['sesame.jpg'] },
  'livestock-production': { images: ['goats.jpg'] },
};

@Component({
  imports: [RouterLink, Card, RevealDirective, SectionTitle],
  selector: 'app-what-we-do',
  styleUrl: './what-we-do.css',
  templateUrl: './what-we-do.html',
})
export class WhatWeDo implements OnDestroy {
  private readonly content = inject(ContentService);

  readonly work = toSignal(this.content.select('whatWeDo'));

  /** Id of the area the visitor is reading now. */
  readonly activeId = signal<string | null>(null);

  private readonly submenu = viewChild<ElementRef<HTMLElement>>('submenu');
  private readonly route = inject(ActivatedRoute);
  private readingLine = 240;
  private observer?: ResizeObserver;

  constructor() {
    effect(() => {
      const id = this.route.snapshot.fragment;
      if (this.work() && id) window.setTimeout(() => this.alignTo(id), 200);
    });
    effect(() => {
      const element = this.submenu()?.nativeElement;
      if (!element) return;

      this.observer?.disconnect();
      this.observer = new ResizeObserver(() => this.measureStickyBars(element));
      this.observer.observe(element);
      this.measureStickyBars(element);
    });
  }

  /** Pill click: put the area title right under the sticky bars. */
  goTo(id: string, event: Event): void {
    event.preventDefault();
    this.alignTo(id);
    window.setTimeout(() => this.alignTo(id), 400);
    history.replaceState(history.state, '', `${location.pathname}#${id}`);
  }

  private alignTo(id: string): void {
    const title = document.getElementById(id)?.querySelector<HTMLElement>('.area__header');
    const bar = this.submenu()?.nativeElement;
    const navbar = document.querySelector('app-navbar') as HTMLElement | null;
    if (!title || !bar) return;

    const stack = (navbar?.offsetHeight ?? 0) + bar.offsetHeight;
    const top = title.getBoundingClientRect().top + window.scrollY - stack - 16;
    window.scrollTo({ top, behavior: 'instant' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    document.documentElement.style.removeProperty('--submenu-height');
  }

  /** Reads the real height of the navbar and sub-menu, so titles are never hidden. */
  private measureStickyBars(submenu: HTMLElement): void {
    const navbar = document.querySelector('app-navbar') as HTMLElement | null;
    const stack = (navbar?.offsetHeight ?? 0) + submenu.offsetHeight;

    document.documentElement.style.setProperty('--submenu-height', `${submenu.offsetHeight}px`);
    this.readingLine = stack + 24;
    this.updateActive();
  }

  @HostListener('window:scroll')
  updateActive(): void {
    const readingLine = this.readingLine;
    let current: string | null = null;

    for (const section of Array.from(document.querySelectorAll<HTMLElement>('.area'))) {
      if (section.getBoundingClientRect().top <= readingLine) {
        current = section.id;
      }
    }
    this.activeId.set(current);
  }

  private readonly shortNames: Record<string, string> = {
    'crop-production-and-horticulture': 'Crop Production',
    'sustainable-land-management-and-ecosystem-restoration': 'Land and Ecosystems',
    'water-management-and-irrigation': 'Water Management',
    'livestock-production': 'Livestock',
    'agricultural-inputs-and-farm-services': 'Inputs and Services',
    'post-harvest-handling-storage-and-processing': 'Post-Harvest',
    'farmer-training-and-agricultural-extension': 'Training',
    'agricultural-business-and-market-development': 'Markets',
  };

  /** Image of an area: its title without spaces or punctuation, e.g. CropProductionandHorticulture.PNG */
  imageFor(title: string): string {
    return `/assets/images/${title.replace(/[^A-Za-z0-9]/g, '')}.PNG`;
  }

  shortName(areaId: string, fallback: string): string {
    return this.shortNames[areaId] ?? fallback;
  }

  mediaFor(areaId: string): AreaMedia {
    return AREA_MEDIA[areaId] ?? {};
  }
}
