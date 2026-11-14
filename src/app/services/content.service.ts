import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

import { SiteContent } from '../models/content.model';

const CONTENT_URL = '/assets/data/content.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  /** The JSON file is requested once and shared by every page. */
  private readonly content$ = this.http
    .get<SiteContent>(CONTENT_URL)
    .pipe(shareReplay({ bufferSize: 1, refCount: false }));

  /** Returns one part of the content, e.g. select('home') or select('aboutUs'). */
  select<K extends keyof SiteContent>(key: K): Observable<SiteContent[K]> {
    return this.content$.pipe(map((content) => content[key]));
  }
}