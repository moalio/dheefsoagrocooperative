/** Shared building blocks */
export interface Titled {
  title: string;
}

export interface NamedItem {
  title: string;
  description: string;
}

/** A section made of intro text, an optional list heading, a list and closing notes. */
export interface ListBlock {
  intro: string[];
  listHeading: string | null;
  items: string[];
  notes: string[];
}

/** site */
export interface NavLink {
  label: string;
  path: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  sectors: string[];
  country: string;
  logo: string;
  navigation: NavLink[];
  contact: {
    address: string;
    phones: string[];
    email: string;
  };
}

/** home */
export interface HomeContent {
  executiveSummary: string[];
}

/** aboutUs */
export interface AboutUsContent {
  overview: { item: string; description: string }[];
  background: string[];
  vision: string;
  mission: string;
  tagline: { text: string; note: string };
  coreValues: NamedItem[];
  overallGoal: string;
  strategicObjectives: string[];
}

/** whatWeDo */
export interface ActivityArea extends ListBlock {
  id: string;
  number: string;
  title: string;
}

export interface WhatWeDoContent {
  areas: ActivityArea[];
  climateResilientAgriculture: {
    title: string;
    intro: string[];
    listHeading: string;
    principles: NamedItem[];
  };
}

/** whoWeServe */
export interface WhoWeServeContent {
  intro: string;
  primaryBeneficiaries: string[];
  secondaryBeneficiaries: string[];
  notes: string[];
  inclusion: Titled & ListBlock;
}

/** whereWeWork */
export interface TextSection extends Titled {
  paragraphs: string[];
}

export interface WhereWeWorkContent {
  primaryFocus: Titled & ListBlock;
  communityApproach: TextSection;
  geographicExpansion: TextSection;
  communityParticipation: Titled & ListBlock;
  partnerships: Titled & ListBlock;
}

/** governanceFinance */
export interface GovernanceBody extends ListBlock {
  id: string;
  title: string;
}

export interface GovernanceFinanceContent {
  intro: string;
  governanceBodies: GovernanceBody[];
  departments: Titled & ListBlock;
  financialManagement: Titled & ListBlock;
  supportingDocuments: Titled & ListBlock;
}

/** impactSustainability */
export interface RiskRow {
  risk: string;
  approach: string;
}

export interface SustainabilityDimension extends NamedItem {
  id: string;
  number: string;
}

export interface ImpactSustainabilityContent {
  responsibility: Titled & ListBlock;
  monitoring: Titled & ListBlock;
  riskManagement: Titled & { intro: string; risks: RiskRow[]; notes: string[] };
  sustainability: Titled & {
    intro: string[];
    dimensions: SustainabilityDimension[];
    notes: string[];
  };
  developmentPriorities: Titled & {
    intro: string[];
    listHeading: string;
    priorities: NamedItem[];
    notes: string[];
  };
}

/** contactUs */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'textarea';
}

export interface ContactUsContent {
  conclusion: string[];
  form: { fields: FormField[] };
}

/** The whole content.json file */
export interface SiteContent {
  site: SiteInfo;
  home: HomeContent;
  aboutUs: AboutUsContent;
  whatWeDo: WhatWeDoContent;
  whoWeServe: WhoWeServeContent;
  whereWeWork: WhereWeWorkContent;
  governanceFinance: GovernanceFinanceContent;
  impactSustainability: ImpactSustainabilityContent;
  contactUs: ContactUsContent;
}