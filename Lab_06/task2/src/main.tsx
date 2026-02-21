import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout"; // Убедись, что файл Layout.tsx лежит рядом!
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import { courses } from "./data"; 
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        errorElement: <p>Course not found</p>,
        loader: async ({ params }) => {
          const course = courses.find(c => c.id === Number(params.id));
          if (!course) throw new Error("Not Found");
          return { course };
        },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);