export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface StatCard {
  id: string;
  title: string;
  value: number;
  growth: number;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  cover: string;
  genre: string;
  year: number;
}

export interface Nasyid {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
  audioUrl: string;
}


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  icon: string;
  color: string;
}
