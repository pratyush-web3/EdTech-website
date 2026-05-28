export type ThemeName = "oro" | "rinascimento" | "milano";

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  hours: string;
  price: string;
  teacher: string;
  image: string;
  summary: string;
  outcomes: string[];
  modules: string[];
};

export type Instructor = {
  name: string;
  role: string;
  city: string;
  image: string;
  bio: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};
