function Broken() {
  throw new Error("Broken page crashed");

  // этот return никогда не выполнится
  return (
    <main>
      <h1>Broken page</h1>
      <p>Эта страница специально сломана.</p>
    </main>
  );
}

export default Broken;