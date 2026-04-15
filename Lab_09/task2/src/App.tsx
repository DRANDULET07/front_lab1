import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 09 - Task 2</h1>

      <VirtualList />

      <hr style={{ margin: "40px 0" }} />

      <RegularList />
    </div>
  );
}

export default App;