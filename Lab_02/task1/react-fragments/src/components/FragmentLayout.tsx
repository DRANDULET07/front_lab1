export function FragmentLayout() {
  return (
    <>
      {/* Fragment groups siblings without adding an extra DOM node. */}
      <header className="box">
        <h1>Fragment Layout</h1>
      </header>
      <main className="box">
        <p>
          This component returns three siblings (header, main, footer) wrapped only in a
          fragment.
        </p>
      </main>
      <footer className="box">
        <small>© {new Date().getFullYear()} Lab 02</small>
      </footer>
    </>
  );
}

