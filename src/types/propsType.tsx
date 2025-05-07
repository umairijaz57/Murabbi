export interface Offer {
  id: number;
  Title: string;
  Link: string;
  Image: string;
  Description: string;
}

export interface AllCourses {
  Title: string;
  Ratings: string;
  Image: string;
  Reviews: string;
  Link: string;
}

export interface Course {
  Title: string;
  Description: string;
  Image: string;
  Courses: AllCourses[];
}

export interface CourseDB {
  _id: string;
  Title: string[];
  Ratings: string;
  Image: string[];
  Reviews: string;
  Link: string;
  Category: string;
  DescriptionMain: string;
  DescriptionShort: string;
  Instructors: string[];
  Learn: string[];
  Prereq: string[];
  Details: string[];
  Tags: string[];
}

export interface courseData {
  data: CourseDB[];
}

export interface NewsDB {
  _id: string;
  Title: string;
  Image:string;
  Link: string;
  Description: string;
  Date:string
}

export interface newsData {
  data: NewsDB[];
}
export interface courseInfo {
  data: CourseDB;
}
