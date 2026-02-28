import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOrder = searchParams.get("sort") || "asc";

  const sortedCourses = [...courses].sort((a, b) =>
    sortOrder === "desc"
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
  );

  const toggleSort = () => {
    setSearchParams({
      sort: sortOrder === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div>
      <h2>Courses</h2>

      <button onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>

      <ul>
        {sortedCourses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}