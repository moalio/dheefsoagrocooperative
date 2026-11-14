import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { PageBanner } from '../../components/page-banner/page-banner';
import { SectionTitle } from '../../components/section-title/section-title';
import { ContentService } from '../../services/content.service';

/** Create a free form at formspree.io and paste its link here. */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  imports: [ReactiveFormsModule, PageBanner, SectionTitle],
  selector: 'app-contact-us',
  styleUrl: './contact-us.css',
  templateUrl: './contact-us.html',
})
export class ContactUs {
  private readonly content = inject(ContentService);
  private readonly http = inject(HttpClient);

  readonly site = toSignal(this.content.select('site'));
  readonly contact = toSignal(this.content.select('contactUs'));

  readonly status = signal<SendStatus>('idle');

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    phone: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  /** True when a field was touched and is not valid. */
  hasError(name: string): boolean {
    const control = this.form.get(name);
    return !!control && control.invalid && control.touched;
  }

  send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.http
      .post(FORM_ENDPOINT, this.form.getRawValue(), { headers: { Accept: 'application/json' } })
      .subscribe({
        next: () => {
          this.status.set('sent');
          this.form.reset();
        },
        error: () => this.status.set('error'),
      });
  }
}
