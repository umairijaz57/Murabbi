export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface ProgramPeriod {
  period: string;
  title: string;
  activities: Activity[];
}

export interface ProgramHighlight {
  icon: any;
  title: string;
  description: string;
}

export interface ProgramConfig {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  programData: Record<number, ProgramPeriod>;
  highlights: ProgramHighlight[];
  imageGallery: Array<{ src: string; alt?: string }>;
  videoSrc?: string;
  videoDescription?: string;
  periodLabel: string; // "Day", "Week", etc.
  journeyTitle: string; // "5-Day AI Journey", "3-Week Learning Adventure", etc.
  journeyDescription: string;
}

export interface ProgramPageProps {
  config: ProgramConfig;
}