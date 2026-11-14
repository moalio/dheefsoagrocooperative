import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  /** Delay in milliseconds, used to bring cards in one after another. */
  readonly appRevealDelay = input(0);

  ngOnInit(): void {
    this.element.classList.add('reveal');
    this.element.style.setProperty('--reveal-delay', `${this.appRevealDelay()}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      this.element.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}