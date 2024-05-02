export type Blog = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  views: number;
};
export type RawBlog = Omit<Blog, "id" | "image" | "views"> & {
  image: File | null;
  views: string;
};
export type Hotel = {
  id: number;
  name: string;
  rating: number;
  location: string;
  image: string;
};
export type RawLead = {
  username: string;
  email: string;
  phone_number: string;
};
export type News = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
};
export type Tour = {
  id: number;
  title: string;
  location: string;
  earnings: string;
  start_date: string;
  description: string;
  image: string;
};
export type Faq = {
  id: number;
  question: string;
  answer: string;
};
export type Group = {
  id: number;
  name: string;
  photo: string;
  position: string;
  email: string;
};
export type RawQuestion = {
  username: string;
  email: string;
  comment: string;
  phone_number: string;
};
export type Settings = {
  id: number;
  logo: string;
  title: string;
  phone_number: string;
  address: string;
  email: string;
  company_experience: string;
};
export type Direction = {
  id: number;
  title: string;
  flag: string;
};
