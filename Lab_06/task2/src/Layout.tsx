import { Link, Outlet } from "react-router-dom"; // [cite: 79]

function Layout() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f0f0f0' }}>
        {/* Используем Link вместо <a> для клиентской навигации */}
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav> [cite: 83-87]

      <main style={{ padding: '20px' }}>
        {/* Здесь будут рендериться дочерние страницы (Home, Courses и т.д.) */}
        <Outlet />
      </main> [cite: 88-90]

      <footer style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        Student Portal 2026
      </footer> [cite: 91]
    </>
  );
}

export default Layout;