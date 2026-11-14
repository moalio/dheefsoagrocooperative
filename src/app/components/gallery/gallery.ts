import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
})
export class Gallery {
  readonly images = input.required<string[]>();
  readonly folder = input('/assets/images/');
  readonly alt = input('DHEEFSO AGRO COOPERATIVE photo');

  readonly selected = signal<string | null>(null);

  path(name: string): string {
    return this.folder() + name;
  }

  open(name: string): void {
    this.selected.set(name);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.selected.set(null);
  }
}
