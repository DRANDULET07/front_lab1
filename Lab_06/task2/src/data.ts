export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Router Basics", instructor: "Sakhniuk", description: "Learning navigation." },
  { id: 2, title: "Advanced TypeScript", instructor: "Boduch", description: "Deep dive into types." },
  { id: 3, title: "Frontend Lab 06", instructor: "Gemini", description: "Dynamic routes." },
  { id: 4, title: "Vite & React", instructor: "Vite Team", description: "Modern tools." }
];