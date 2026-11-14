import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-video-player',
  styleUrl: './video-player.css',
  templateUrl: './video-player.html',
})
export class VideoPlayer {
  readonly src = input.required<string>();
  readonly folder = input('/assets/videos/');
  readonly poster = input<string>();
  readonly caption = input<string>();
  readonly autoplay = input(false);

  readonly path = computed(() => this.folder() + this.src());
}
