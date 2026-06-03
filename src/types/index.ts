// Component Props Types

export type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  caseStudy: ProjectCaseStudy;
  caseStudyLabels: ProjectCaseStudyLabels;
  caseStudyButtonLabel: string;
  closeLabel: string;
  gitUrl: string;
  previewUrl: string;
};

export type ProjectCaseStudy = {
  subtitle: string;
  type: string;
  year: string;
  role: string;
  overview?: string[];
  problem?: string;
  myRole: string;
  workSections?: ProjectCaseStudySection[];
  whatIDid?: string[];
  outcome?: string;
  whatILearned?: string;
  whyItMattered?: string;
  projectShows?: string;
};

export type ProjectCaseStudySection = {
  title: string;
  paragraphs: string[];
};

export type ProjectCaseStudyLabels = {
  type: string;
  year: string;
  role: string;
  stack: string;
  overview: string;
  problem: string;
  myRole: string;
  whatIWorkedOn: string;
  whatIDid: string;
  outcome: string;
  whatILearned: string;
  whyItMattered: string;
  projectShows: string;
};

export type ProjectCaseStudyModalProps = {
  title: string;
  techStack: string[];
  caseStudy: ProjectCaseStudy;
  caseStudyLabels: ProjectCaseStudyLabels;
  closeLabel: string;
  onClose: () => void;
};

export type ProjectTagProps = {
  name: string;
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
};

export type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: string[] | string;
};

export type NavLinkProps = {
  href: string;
  title: string;
};

export type Project = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  highlightsKey?: string;
  techStackKey: string;
  caseStudyKey: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

// Analytics Types

export type GoogleAnalyticsProps = {
  GA_MEASUREMENT_ID: string;
};
