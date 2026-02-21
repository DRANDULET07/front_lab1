import { useLoaderData } from "react-router-dom";
import { Course } from "../data";

export default function CourseDetail() {
  const { course } = useLoaderData() as { course: Course };
  return (
    <div>
      <h1>{course.title}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
    </div>
  );
}