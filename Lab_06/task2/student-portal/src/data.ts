export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    instructor: "Aigerim",
    description: "HTML, CSS, JavaScript, React basics.",
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Timur",
    description: "Lists, trees, graphs, algorithms.",
  },
  {
    id: 3,
    title: "Databases",
    instructor: "Madina",
    description: "SQL, normalization, relational databases.",
  },
  {
    id: 4,
    title: "Software Testing",
    instructor: "Dia",
    description: "Manual & automated testing, QA basics.",
  },
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}