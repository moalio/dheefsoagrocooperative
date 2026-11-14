import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { WhatWeDo } from './pages/what-we-do/what-we-do';
import { WhoWeServe } from './pages/who-we-serve/who-we-serve';
import { WhereWeWork } from './pages/where-we-work/where-we-work';
import { GovernanceFinance } from './pages/governance-finance/governance-finance';
import { ImpactSustainability } from './pages/impact-sustainability/impact-sustainability';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home, title: 'DHEEFSO AGRO COOPERATIVE | Growing Together, Prosperity for All' },
  { path: 'about-us', component: AboutUs, title: 'About Us | DHEEFSO AGRO COOPERATIVE' },
  { path: 'what-we-do', component: WhatWeDo, title: 'What We Do | DHEEFSO AGRO COOPERATIVE' },
  { path: 'who-we-serve', component: WhoWeServe, title: 'Who We Serve | DHEEFSO AGRO COOPERATIVE' },
  { path: 'where-we-work', component: WhereWeWork, title: 'Where We Work | DHEEFSO AGRO COOPERATIVE' },
  { path: 'governance-finance', component: GovernanceFinance, title: 'Governance and Finance | DHEEFSO AGRO COOPERATIVE' },
  { path: 'impact-sustainability', component: ImpactSustainability, title: 'Impact and Sustainability | DHEEFSO AGRO COOPERATIVE' },
  { path: 'contact-us', component: ContactUs, title: 'Contact Us | DHEEFSO AGRO COOPERATIVE' },
  { path: '**', redirectTo: '' },
];
